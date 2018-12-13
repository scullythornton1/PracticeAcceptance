name := "First"

version := "0.1"

scalaVersion := "2.12.8"

val seleniumVersion = "3.13.0"

libraryDependencies ++= Seq(
  "io.cucumber"                    %% "cucumber-scala"              % "2.0.1",
  "io.cucumber"                    % "cucumber-junit"               % "2.4.0",
  "org.seleniumhq.selenium"        % "selenium-support"             % seleniumVersion,
  "org.seleniumhq.selenium"        % "selenium-chrome-driver"       % seleniumVersion,
  "org.scalatest"                  %% "scalatest"                   % "3.0.5",
  "org.scalaj"                     %% "scalaj-http"                 % "2.4.1",
  "com.nimbusds"                   % "oauth2-oidc-sdk"              % "6.1.1",
  "com.novocode"                   % "junit-interface"              % "0.11",
  "com.typesafe"                   % "config"                       % "1.3.3",
  "com.osinka.i18n"                %% "scala-i18n"                  % "1.0.2",
  "com.fasterxml.jackson.core"     % "jackson-databind"             % "2.9.7",
  "com.fasterxml.jackson.module"   %% "jackson-module-scala"        % "2.9.7",
  "org.apache.commons"             % "commons-io"                   % "1.3.2",
  "org.mongodb.scala"              %% "mongo-scala-driver"          % "2.4.2",
  "com.eclipsesource"              %% "play-json-schema-validator"  % "0.9.5-M4",
  "com.typesafe.play"              %% "play-json"                   % "2.6.10"
)