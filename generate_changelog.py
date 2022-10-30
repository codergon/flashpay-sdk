import argparse
import re
from pathlib import Path

CHANGELOG_PATH = Path(__file__).resolve().parent / 'CHANGELOG.md'


def generate_changelog(version: str) -> str:
    """Generate changelog for package release from CHANGELOG.md"""
    # convert 'v1.0.0' to '1.0.0'
    version = version[1:]
    release_text_regex = r'\[\d.\d.\d\]'
    changes = []
    with open(CHANGELOG_PATH) as f:
        lines = f.readlines()
        should_start = False
        for line in lines:
            version_match = re.search(release_text_regex, line)
            if version_match is not None:
                # convert '[1.0.0]' to '1.0.0'
                _version = version_match.group(0)[1:-1]
                if _version == version:
                    should_start = True
                    continue

            if should_start is True and re.search(release_text_regex, line) is not None:
                break

            if should_start is True:
                if line.strip() == '':
                    continue

                changes.append(line)

    return '\n'.join(changes)


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description='Get changes for release notes from the changelog')
    parser.add_argument('-v', '--version', type=str, help='Version to generate the changelog for')

    args = parser.parse_args()

    print(generate_changelog(args.version))
