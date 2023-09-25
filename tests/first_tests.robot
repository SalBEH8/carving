*** Settings ***
Documentation    Example Test Suite
Library          SeleniumLibrary

*** Variables ***
${BROWSER}       Chrome
${URL}           http://localhost:5173

*** Test Cases ***
Open Web Page
    Open Browser    ${URL}    ${BROWSER}
    Wait Until Page Contains    craving manager    timeout=30s
    Capture Page Screenshot
    Close Browser
