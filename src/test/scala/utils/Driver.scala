package utils

import java.io.File

import org.openqa.selenium.WebDriver
import org.openqa.selenium.chrome.{ChromeDriver, ChromeOptions}
import org.openqa.selenium.remote.DesiredCapabilities
import scala.collection.JavaConversions._
import scala.io.Source

object Driver extends Driver

class Driver {

  var instance: WebDriver = null
  private var baseWindowHandle: String = null
  var javascriptEnabled: Boolean = true

  def setJavascript(enabled: Boolean) {
    javascriptEnabled = enabled
    if (instance != null) closeInstance()
  }

  def getInstance(): WebDriver = {
    if (instance == null) {
      initialiseBrowser()

      /* Runtime.getRuntime.addShutdownHook(new Thread() {
         @Override
         override def run() {
           instance.close()
         }
       })*/
    }
    instance
  }

  def initialiseBrowser() {
    instance = createChromeDriver()
    //    instance.manage().window().maximize()
    baseWindowHandle = instance.getWindowHandle
  }

  def closeInstance() = {
    if (instance != null) {

      closeNewlyOpenedWindows()

      instance.close()
      instance = null
      baseWindowHandle = null
    }
  }

  def closeNewlyOpenedWindows() {
    instance.getWindowHandles.toList.foreach(w =>
      if (w != baseWindowHandle) instance.switchTo().window(w).close()
    )

    instance.switchTo().window(baseWindowHandle)
  }

  def createChromeDriver(): WebDriver = {
    System.setProperty("webdriver.chrome.driver", "/usr/local/bin/chromedriver")
    val capabilities = DesiredCapabilities.chrome()
    capabilities.setJavascriptEnabled(true)
    val options = new ChromeOptions()
//    options.addExtensions(new File("addons/waveLocal.crx"))
    capabilities.setCapability(ChromeOptions.CAPABILITY, options)
    val driver = new ChromeDriver(capabilities)
    //      driver.manage().window().maximize()
    driver
  }
}