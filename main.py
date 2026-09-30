import os
from datetime import datetime, timedelta, timezone
from pathlib import Path

os.environ.setdefault("GIFOS_GENERAL_USER_NAME", "victorflipe")
os.environ.setdefault("GIFOS_GENERAL_COLOR_SCHEME", "everblush")

import gifos

USERNAME = "victorflipe"
TZ = timezone(timedelta(hours=-3))
README_PATH = Path("README.md")
MARKER_START = "<!-- GIFOS:START -->"
MARKER_END = "<!-- GIFOS:END -->"
SIDE_IMAGE_ROW = 4
SIDE_IMAGE_COL = 3
SIDE_IMAGE_SCALE = 0.15
SIDE_TEXT_COL = 32
TECH_IMAGE_ROW = 7


def update_readme(time_now: str) -> None:
    gif_block = f"""{MARKER_START}
<div align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="./output.gif">
    <source media="(prefers-color-scheme: light)" srcset="./output.gif">
    <img alt="GIFOS" src="output.gif">
  </picture>
  <br>
  <sub><i>Gerado com <a href="https://github.com/x0rzavi/github-readme-terminal">github-readme-terminal</a> em {time_now}</i></sub>
</div>
{MARKER_END}"""

    content = README_PATH.read_text(encoding="utf-8") if README_PATH.exists() else ""
    if MARKER_START in content and MARKER_END in content:
        before, rest = content.split(MARKER_START, 1)
        _, after = rest.split(MARKER_END, 1)
        README_PATH.write_text(before + gif_block + after, encoding="utf-8")
    else:
        README_PATH.write_text(gif_block + "\n\n" + content, encoding="utf-8")
    print("INFO: README.md atualizado")


def ensure_gif(fps: str = "13") -> None:
    gif_path = Path("output.gif")
    if gif_path.exists() and gif_path.stat().st_size > 0:
        return

    frames = Path("frames")
    if not frames.exists() or not any(frames.glob("frame_*.png")):
        raise SystemExit("ERROR: nenhum frame gerado para montar o GIF")

    import subprocess

    subprocess.run(
        [
            "ffmpeg",
            "-hide_banner",
            "-loglevel",
            "error",
            "-y",
            "-r",
            fps,
            "-i",
            str(frames / "frame_%d.png"),
            "-filter_complex",
            "[0:v] split [a][b];[a] palettegen [p];[b][p] paletteuse",
            "output.gif",
        ],
        check=True,
    )
    print("INFO: output.gif gerado via ffmpeg (fallback Windows)")


def main() -> None:
    t = gifos.Terminal(750, 500, 15, 15)
    t.set_fps(13)
    year_now = datetime.now(TZ).strftime("%Y")
    time_now = datetime.now(TZ).strftime("%a %b %d %I:%M:%S %p %Z %Y")

    t.toggle_show_cursor(False)
    t.gen_text("GIF_OS Modular BIOS v1.0.11", 1)
    t.gen_text(
        f"Copyright (C) {year_now}, \x1b[31mVictor Felipe Softwares Inc.\x1b[0m",
        2,
    )
    t.gen_text("\x1b[94mGitHub Profile ReadMe Terminal, Rev 1011\x1b[0m", 4)
    t.gen_text("Krypton(tm) GIFCPU - 250Hz", 6)
    t.gen_text("Memory Test: 64KB OK", 7, count=8)

    t.clear_frame()
    t.gen_text("\x1b[93mGIF OS v1.0.11 (tty1)\x1b[0m", 1, count=4)
    t.gen_text("login: ", 3, count=3)
    t.toggle_show_cursor(True)
    t.gen_typing_text(USERNAME, 3, contin=True)
    t.gen_text("", 4, count=3)
    t.toggle_show_cursor(False)
    t.gen_text("password: ", 4, count=3)
    t.toggle_show_cursor(True)
    t.gen_typing_text("*********", 4, contin=True)
    t.toggle_show_cursor(False)
    t.gen_text(f"Last login: {time_now} on tty1", 6)

    details = """
    \x1b[97mHello, nice to meet you! I'm Victor Felipe.\x1b[0m
    \x1b[30;101mvictorflipe@GitHub\x1b[0m
    --------------
    \x1b[96mOS:     \x1b[93mWindows 11, Linux\x1b[0m
    \x1b[96mHost:   \x1b[93mMontes Claros - MG\x1b[0m
    \x1b[96mKernel: \x1b[93mSoftware Engineer\x1b[0m
    \x1b[96mUptime: \x1b[93m7+ years shipping code\x1b[0m
    \x1b[96mIDE:    \x1b[93mVS Code, Cursor\x1b[0m
    \x1b[96mStack:  \x1b[93mPython, JavaScript, PHP\x1b[0m

    \x1b[30;101mContact:\x1b[0m
    --------------
    \x1b[96mEmail:    \x1b[93mvictorf.roliver@gmail.com\x1b[0m
    \x1b[96mLinkedIn: \x1b[93mvictorflipe\x1b[0m
    """

    t.clear_frame()
    t.gen_prompt(1)
    t.toggle_show_cursor(True)
    t.gen_typing_text("\x1b[92mwhoiam\x1b[0m", 1, contin=True)
    t.toggle_show_cursor(False)
    t.gen_text(details, 2, SIDE_TEXT_COL, count=5, contin=True)
    prompt_row = t.curr_row
    t.paste_image(
        "images/avatar.png",
        SIDE_IMAGE_ROW,
        SIDE_IMAGE_COL,
        size_multiplier=SIDE_IMAGE_SCALE,
    )
    t.gen_prompt(prompt_row)
    t.toggle_show_cursor(True)
    t.gen_text("", t.curr_row, count=80, contin=True)
    t.gen_typing_text("\x1b[92mclear\x1b[0m", t.curr_row, contin=True)
    t.toggle_show_cursor(False)
    t.gen_text("", t.curr_row, count=8, contin=True)

    techs = """
    \x1b[96mLanguages:\x1b[0m
    --------------
    \x1b[93mJavaScript, TypeScript, Python, PHP\x1b[0m

    \x1b[96mFrameworks:\x1b[0m
    --------------
    \x1b[93mReact, Vue.js, FastAPI, Laravel, Next.js, Flask\x1b[0m

    \x1b[96mDatabases:\x1b[0m
    --------------
    \x1b[93mMySQL, PostgreSQL, SQLServer\x1b[0m

    \x1b[96mCloud e Tools:\x1b[0m
    --------------
    \x1b[93mGCP, Node.js, Git, VS Code, Cursor\x1b[0m

    \x1b[96mAutomation and Platforms:\x1b[0m
    --------------
    \x1b[93mGitHub Actions, Azure Boards, Trello,\x1b[0m
    \x1b[93mPower Platform, Selenium, SAP, Pipefy\x1b[0m
    """

    t.clear_frame()
    t.gen_prompt(1)
    t.toggle_show_cursor(True)
    t.gen_typing_text("\x1b[92mwhich technologies\x1b[0m", 1, contin=True)
    t.toggle_show_cursor(False)
    t.gen_text(techs, 2, SIDE_TEXT_COL, count=5, contin=True)
    prompt_row = t.curr_row
    t.paste_image(
        "images/technology.png",
        TECH_IMAGE_ROW,
        SIDE_IMAGE_COL,
        size_multiplier=SIDE_IMAGE_SCALE,
    )
    t.gen_prompt(prompt_row)
    t.toggle_show_cursor(True)
    t.gen_text("", t.curr_row, count=130, contin=True)
    t.gen_typing_text(
        "\x1b[92mThanks for stopping by! :)\x1b[0m",
        t.curr_row,
        contin=True,
    )
    t.toggle_show_cursor(False)
    t.gen_prompt(t.curr_row)
    t.toggle_show_cursor(True)
    t.gen_typing_text("\x1b[92mlogout\x1b[0m", t.curr_row, contin=True)
    t.toggle_show_cursor(False)
    t.gen_text("", t.curr_row, count=8, contin=True)

    t.gen_gif()
    ensure_gif("13")
    update_readme(time_now)


if __name__ == "__main__":
    main()
