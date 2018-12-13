$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/01-Individual/01-IR-SA.feature");
formatter.feature({
  "name": "IR-SA",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@all"
    }
  ]
});
formatter.scenario({
  "name": "User is able to de-enrol from IR-SA",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@all"
    }
  ]
});
formatter.step({
  "name": "I have an activated enrolment for IR-SA and request a removal",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefs.scala:61"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the continue button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefs.scala:35"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"submit-continue\"}\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d2.44.609551 (5d576e9a44fe4c5b6a07e568f1ebc753f1214634),platform\u003dLinux 4.15.0-42-generic x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.13.0\u0027, revision: \u00272f0d292\u0027, time: \u00272018-06-25T15:24:21.231Z\u0027\nSystem info: host: \u0027ben-XPS-15-9550\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00274.15.0-42-generic\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.44.609551 (5d576e9a44fe4c..., userDataDir: /tmp/.org.chromium.Chromium...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:36571}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 69.0.3497.100, webStorageEnabled: true}\nSession ID: 536ff8391e78ce6546a72d82a360e0d8\n*** Element info: {Using\u003did, value\u003dsubmit-continue}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:368)\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\n\tat pages.BasePage.clickById(BasePage.scala:51)\n\tat pages.BasePage.clickById$(BasePage.scala:51)\n\tat stepdefs.StepDefs.clickById(StepDefs.scala:11)\n\tat stepdefs.StepDefs.$anonfun$new$3(StepDefs.scala:38)\n\tat cucumber.api.scala.ScalaDsl$StepBody$$anonfun$apply$2.applyOrElse(ScalaDsl.scala:100)\n\tat cucumber.api.scala.ScalaDsl$StepBody$$anonfun$apply$2.applyOrElse(ScalaDsl.scala:98)\n\tat scala.runtime.AbstractPartialFunction.apply(AbstractPartialFunction.scala:38)\n\tat cucumber.runtime.scala.ScalaStepDefinition.execute(ScalaStepDefinition.scala:70)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:40)\n\tat cucumber.api.TestStep.executeStep(TestStep.java:102)\n\tat cucumber.api.TestStep.run(TestStep.java:83)\n\tat cucumber.api.TestCase.run(TestCase.java:58)\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:118)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:56)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:127)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\n\tat com.novocode.junit.JUnitRunner$1.execute(JUnitRunner.java:132)\n\tat sbt.TestRunner.runTest$1(TestFramework.scala:113)\n\tat sbt.TestRunner.run(TestFramework.scala:124)\n\tat sbt.TestFramework$$anon$2$$anonfun$$lessinit$greater$1.$anonfun$apply$1(TestFramework.scala:282)\n\tat sbt.TestFramework$.sbt$TestFramework$$withContextLoader(TestFramework.scala:246)\n\tat sbt.TestFramework$$anon$2$$anonfun$$lessinit$greater$1.apply(TestFramework.scala:282)\n\tat sbt.TestFramework$$anon$2$$anonfun$$lessinit$greater$1.apply(TestFramework.scala:282)\n\tat sbt.TestFunction.apply(TestFramework.scala:294)\n\tat sbt.Tests$.$anonfun$toTask$1(Tests.scala:309)\n\tat sbt.std.Transform$$anon$3.$anonfun$apply$2(System.scala:46)\n\tat sbt.std.Transform$$anon$4.work(System.scala:67)\n\tat sbt.Execute.$anonfun$submit$2(Execute.scala:269)\n\tat sbt.internal.util.ErrorHandling$.wideConvert(ErrorHandling.scala:16)\n\tat sbt.Execute.work(Execute.scala:278)\n\tat sbt.Execute.$anonfun$submit$1(Execute.scala:269)\n\tat sbt.ConcurrentRestrictions$$anon$4.$anonfun$submitValid$1(ConcurrentRestrictions.scala:178)\n\tat sbt.CompletionService$$anon$2.call(CompletionService.scala:37)\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\n\tat java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:511)\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)\n\tat java.lang.Thread.run(Thread.java:748)\n\tat ✽.I click the continue button(src/test/resources/features/01-Individual/01-IR-SA.feature:13)\n",
  "status": "failed"
});
formatter.step({
  "name": "I click the remove access button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefs.scala:35"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I am is presented with the IR-SA access removed screen",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs.scala:54"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("src/test/resources/features/99-teardown.feature");
formatter.feature({
  "name": "Teardown after tests have run",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@teardown"
    }
  ]
});
formatter.scenario({
  "name": "Quitting the browser",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@teardown"
    }
  ]
});
formatter.step({
  "name": "I shut the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs.scala:77"
});
formatter.result({
  "status": "passed"
});
});