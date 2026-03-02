import com.kms.katalon.core.testobject.ConditionType as CT
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.util.KeywordUtil as KU
import com.kms.katalon.core.model.FailureHandling as FH

TestObject css(String name, String selector) {
    TestObject to = new TestObject(name)
    to.addProperty("css", CT.EQUALS, selector)
    return to
}

/**
 * LAB SMOKE
 * Purpose: Apples-to-apples parity with Cypress & Playwright
 * Validate LinkedIn guest landing renders primary CTAs
 */

String url = "https://www.linkedin.com/"

WebUI.openBrowser("")
WebUI.navigateToUrl(url)
WebUI.waitForPageLoad(30)

// CTA locators (stable + minimal)
TestObject btnSignIn  = css("btnSignIn",  "a[href*='login']")
TestObject btnJoinNow = css("btnJoinNow", "a[href*='signup'], a[href*='registration']")

boolean signInVisible  = WebUI.verifyElementVisible(btnSignIn, FH.OPTIONAL)
boolean joinNowVisible = WebUI.verifyElementVisible(btnJoinNow, FH.OPTIONAL)

if (!signInVisible && !joinNowVisible) {
    KU.markFailed("Neither Sign in nor Join now CTA was visible.")
} else {
    KU.markPassed("LinkedIn guest landing rendered expected CTA(s).")
}

WebUI.closeBrowser()
