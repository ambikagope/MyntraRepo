package stepDefinations;

import java.io.FileReader;
import java.util.Properties;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import DefineElements.*;

public class stepDefination {
	WebDriver driver;
	loginPage object;
	Properties p;
	
	@Given("^User is on Myntra login page$")
	public void user_is_on_Myntra_login_page() throws Throwable {
	    
		WebDriverManager.chromedriver().setup();
		driver=new ChromeDriver();
		driver.manage().window().maximize();
		
		FileReader reader=new FileReader("src\\test\\java\\testData\\Data.properties");
		p=new Properties();
		p.load(reader);
	    String url= p.getProperty("TestURL");
	    
	    driver.get(url);
		driver.manage().timeouts().implicitlyWait(10,TimeUnit.SECONDS);
		
		object= new loginPage(driver);
		//System.out.println("object");
	    object.typeUserName().isDisplayed();
	}

	@When("^user enter (.+) and (.+)$")
	public void user_enter_username_and_password(String userID, String pwd) throws Throwable {
		object.typeUserName().sendKeys(userID);
	    object.typePassword().sendKeys(pwd);
	    Thread.sleep(15000);
	}

	@When("^click on login button$")
	public void click_on_login_button() throws Throwable {
		object.butonLogin().click();
	   
	}

	@Then("^Home page is displayed$")
	public void home_page_is_displayed() throws Throwable {
		object.search().isDisplayed();
	 
	}

	@Then("^search for (.+)$")
	public void search_for_bags_for_women(String product) throws Throwable {
		object.search().sendKeys(product+Keys.ENTER);
        object.tag().isDisplayed();
        System.out.println("Test completed");
        driver.close();
	}
	
}
	
