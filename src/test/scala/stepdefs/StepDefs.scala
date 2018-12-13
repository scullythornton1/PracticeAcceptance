package stepdefs

import cucumber.api.scala.{EN, ScalaDsl}
import org.scalatest.Matchers
import pages.BasePage
import utils.Env
import junit.framework.Assert
import scala.io.Source
import scala.util.Random

class StepDefs extends ScalaDsl with EN with Env with Matchers with BasePage {

  Given("""^I log in to request access to (.*)$""") { (enrolment: String) =>
    navigateTo(authWizardUri)
    findByName("authorityId").clear()
    findByName("authorityId").sendKeys("ben-ryan-org")
    findByName("redirectionUrl").clear()
    findByName("redirectionUrl").sendKeys(s"$enrolmentMgmtFeUri/$enrolment/request-access-tax-scheme?continue=%2FTest")
    selectFromDropdownByText("affinityGroup", "Organisation")
    clickByCSSSelector("input.button[value='Submit']")
    enrolment match {
      case "IR-SA" => assert(waitAndFindByCSSSelector("h1").getText == "Request access to Self-Assessment")
      case _ => fail(s"$enrolment is unknown, choose a valid service to enrol")
    }
  }

  When("""^the (.*) is input as (.*)$""") { (knownFact: String, kfValue: String) =>
    knownFact match {
      case "UTR" => sendKeysById("identifiers[0]", kfValue)
      case "NINO" => sendKeysById("verifiers[0]", kfValue)
      case _ => fail(s"$knownFact is unknown, enter a valid known fact")
    }
  }

  When("""^I click the (.*) button$""") { (buttonText: String) =>
    buttonText match {
      case "request access" | "continue" | "remove access"
      => clickById("submit-continue")
      case _ => fail(s"$buttonText is unknown and cannot be clicked")
    }
  }

  Then("""^the I am presented with the (.*) access requested screen$""") { (pageHeading: String) =>
    pageHeading match {
      case "IR-SA" => assert(waitAndFindByCSSSelector("h1").getText == "You've requested access to Self-Assessment")
      case _ => fail("The page's heading was not as expected")
    }
  }

  Given("""^I choose to de-enrol from (.*)""") {(enrolment: String) =>
    navigateTo(s"$enrolmentMgmtFeUri/$enrolment/remove-access-tax-scheme?continue=%2FTest")
  }

  Then("""^I am is presented with the (.*) access removed screen$""") { (pageHeading: String) =>
    pageHeading match {
      case "IR-SA" => assert(waitAndFindByCSSSelector("h1").getText == "You've removed access to Self-Assessment")
      case _ => fail("The page's heading was not as expected")
    }
  }

  Given("""^I have an activated enrolment for (.*) and request a removal$""") { (enrolment: String) =>
    navigateTo(authWizardUri)
    findByName("authorityId").clear()
    findByName("authorityId").sendKeys("ben-ryan-org")
    findByName("redirectionUrl").clear()
    findByName("redirectionUrl").sendKeys(s"$enrolmentMgmtFeUri/$enrolment/remove-access-tax-scheme?continue=%2FTest")
    selectFromDropdownByText("affinityGroup", "Organisation")
    findByName("email").sendKeys("default@example.com")
    findByName("enrolment[0].name").sendKeys("IR-SA")
    sendKeysById("input-0-0-name", "UTR")
    sendKeysById("input-0-0-value", "1231231231")
    clickByCSSSelector("input.button[value='Submit']")

  }

  Then("""^I shut the browser$""") {
    quitBrowser()
  }

}
