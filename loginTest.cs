using NUnit.Freamework;
using Open.Selenium;
using Open.Selenium.Chrome;
using Open.Selenium.Support.UI;
using SlackScholar.Test;
using system;
using system.Text

namespace SlackScholar.Test
{
    [Testfixture, Category ("")]
    [Ignore("Not currently working:")]
    public class LoginTest: SeleniumTestBase
    {
        private IWebDriver driver;
        [SetUp]
        public void Initialize()
        {
            driver = CreateDriver()
            driver.Navigate().GoToUrl("http://slacksholar.local.slackscholar.com");
        }
        [TearDown]
        public void TearDown()
        {
            driver.Close();
            driver.Quit();
        }
        [Test]
        public void ItLogIn()
        {
            var loginPage = new loginPage(driver);
            loginPage.ShowSigninButton.Click();
            loginPage.SignIn("slackscholar@gmail.com", "password");
        }
    }
}