package DefineElements;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class loginPage {

	//public static void main(String[] args) {
		// TODO Auto-generated method stub
  WebDriver driver;
  @FindBy(xpath="//input[@placeholder='Your Email Address']")
  WebElement txt_UserID;
  @FindBy(xpath="//input[@placeholder='Enter Password']")
  WebElement txt_Pwd;
  @FindBy(xpath="//button[text()='Log in']")
  WebElement btn_Login;
  @FindBy(xpath="//input[@placeholder='Search for products, brands and more']")
  WebElement txt_Search;
  @FindBy(xpath="//h1[text()='Bags For Women']")
  WebElement lnk_tag;
  
public loginPage(WebDriver driver) {
	this.driver=driver;	
	PageFactory.initElements(driver, this);
}
public WebElement typeUserName() {
	return txt_UserID;
}
public WebElement typePassword() {
	return txt_Pwd;
}
public WebElement butonLogin() {
	return btn_Login;
}
public WebElement search() {
	return txt_Search;
}
public WebElement tag() {
	return lnk_tag;	
}
}