package utils

import com.typesafe.config.{Config, ConfigFactory}

trait Env {

  val environment = System.getProperty("environment", "local").toLowerCase
  lazy val config: Config = ConfigFactory.load()

  private def getConfigString(key: String): String = {
    val property : String = s"$environment.$key"
    config.getString(property)
  }

  def sleep(millis: Int = 500) = Thread.sleep(millis)

  lazy val authWizardUri = getConfigString("services.auth-Wizard-uri")
  lazy val enrolmentMgmtFeUri = getConfigString("services.enrolment-management-frontend-uri")

}
