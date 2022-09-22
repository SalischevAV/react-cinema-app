#!/bin/bash
BRANCH_NAME_REGEX='^(feature|hotfix|bugfix)\/'
BRANCH_CONVENTION_CHECK="$(echo "${CIRCLE_BRANCH}" | grep -Eo "${BRANCH_NAME_REGEX}")"
GIT_COMMIT_DESC="$(git log --format=oneline -n 1 $CIRCLE_SHA1)"


echo $GIT_COMMIT_DESC
if [ -z "${BRANCH_CONVENTION_CHECK}" ]; then
    echo 'Branch name does not adhere to project conventions.'
    exit 1;
fi
