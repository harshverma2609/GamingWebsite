
import './common.css';
import Header from './Header';
import Footer from './Footer';

function CookiePolicy() {
  return (
    <div>
      <Header/>
      <div className='policy'>
        <h2>Cookie Policy</h2>
        
        <p>What are cookies? <br/> A cookie is a small text file that a website stores on your computer or mobile device when you visit the site.</p>
        <p>
            First party cookies are cookies set by the website you’re visiting. Only that website can read them. In addition, a website might potentially use external services, which also set their own cookies, known as third-party cookies.
            <br/>
            Persistent cookies are cookies saved on your computer and that are not deleted automatically when you quit your browser, unlike a session cookie, which is deleted when you quit your browser.
            <br/>
            Every time you visit the Commission’s websites, you will be prompted to accept or refuse cookies.
        </p>

        <p>The purpose is to enable the site to remember your preferences (such as user name, language, etc.) for a certain period of time.</p>
        <p>That way, you don’t have to re-enter them when browsing around the site during the same visit.</p>
        <p>Cookies can also be used to establish anonymised statistics about the browsing experience on our sites.</p>
        <p>How do we use cookies?</p>
        <p>European Commission websites mostly use “first-party cookies”. These are cookies set and controlled by the Commission, not by any external organisation.</p>
        <p>However, to view some of our pages, you will have to accept cookies from external organisations.</p>
        <p>The 3 types of first-party cookie we use are to:</p>
        <p>
            store visitor preferences
            <br/>
            make our websites operational
            <br/>
            gather analytics data (about user behaviour)
            <br/>
            Visitor preferences
            <br/>
            These are set by us and only we can read them. They remember:
        </p>
        <ul>
            <li>if you have agreed to (or refused) this site’s cookie policy</li>
            <li>if you have already replied to our survey pop-up (about how helpful the site content was) – so you won’t be asked again</li>
        </ul>
        <p>Operational cookies <br/> There are some cookies that we have to include in order for certain web pages to function. For this reason, they do not require your consent. In particular:</p>
        <p>
            <b>Authentication cookies-</b> technical cookies required by certain IT systems
            <br/>
            <b>Analytics cookies-</b> We use these purely for internal research on how we can improve the service we provide for all our users.
        </p>
        <p>The cookies simply assess how you interact with our website – as an anonymous user (the data gathered does not identify you personally).</p>
        <p>Also, this data is not shared with any third parties or used for any other purpose. The anonymised statistics could be shared with contractors working on communication projects under contractual agreement with the Commission.</p>
        <p>However, you are free to refuse these types of cookies</p>
        <p>
            Third-party cookies
            <br/>
            Some of our pages display content from external providers, e.g. YouTube, Facebook and Twitter.
            <br/>
            To view this third-party content, you first have to accept their specific terms and conditions. This includes their cookie policies, which we have no control over.
            <br/>
            But if you do not view this content, no third-party cookies are installed on your device.
            <br/>
            These third-party services are outside of the control of the Commission. Providers may, at any time, change their terms of service, purpose and use of cookies, etc.
        </p>
        <p>How can you manage cookies? <br/> Removing cookies from your device</p>
        <p>You can delete all cookies that are already on your device by clearing the browsing history of your browser. This will remove all cookies from all websites you have visited.</p>
        <p>Be aware though that you may also lose some saved information (e.g. saved login details, site preferences).</p>
        <p>Managing site-specific cookies</p>
        <p>For more detailed control over site-specific cookies, check the privacy and cookie settings in your preferred browser</p>
        <p>Blocking cookies</p>
        <p>You can set most modern browsers to prevent any cookies being placed on your device, but you may then have to manually adjust some preferences every time you visit a site/page. And some services and functionalities may not work properly at all (e.g. profile logging-in).</p>
      </div>
      <Footer />
    </div>
  );
}

export default CookiePolicy;
