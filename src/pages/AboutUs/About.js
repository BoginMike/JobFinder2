import React, { Fragment } from "react";
import Header from "../../shared/components/Header";
import "../../App.css";

function About() {
  return (
    <Fragment>
      <Header />
      <p align="left" className="about">
        {/* <b>Company Information:</b>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
        <a href="https://WWW.CopyMachineRental.com">
          WWW.CopyMachineRental.com
        </a>
        &nbsp; is a division of Copying Technologies, Inc.&nbsp; We are located
        conveniently throughout the NY,NJ,DC,PA,VA and DE areas.&nbsp; We are
        very strong in Philadelphia , Newark , Atlantic City and New York
        City!Our main office is at 101 E. Main Street in Maple Shade, NJ 08052.
        Ask for Mike. */}
        <ul>
          <h2>
            This section will talk about the company history in the final
            version but for now will talk about my Capstone project history……
            <br />
            <br />
            <u>Knowledge Hut Capstone Full Stack Course Capstone#1 History:</u>
            <br />
            The project I chose was to update an old business site I created
            about 15 years ago. The site is still up and running. Its link is
            http://www.CopyMachineRental.com (please check it to see the many
            differences). This is a list of the steps I took to not only turn it
            into a react routine, but vastly improve it as well.
            <li>
              1. The original site was written in HTML with some inline styling,
              no CSS and some bookmarks and one link to a local area page. I
              started by turning the index.html into an index.js routine located
              in the pages folder. I also created the skeleton pages for About,
              Contact, LocationsServed and RentalEquipment .js files. There were
              initially about 100 errors – mostly renaming classes and also
              closing tags for images and other items. I used create-react-app
              to get the initial react structure. My goal was to keep the look
              of the original site as much as possible, while adding a lot more
              functionality.
            </li>
            <li>
              2. Once all the errors were resolved I added a header section to
              be shown on every page and a navbar to get to the other pages I am
              creating. While building this new version of my old site I tried
              to employ as many of the react features that I learned from
              Sachin in the prism lectures and from Kabir and Sagar in the live
              lectures. I included hooks, some classes but mostly functions
              (like arrow functions and some maps). Many of these react features
              we only briefly touched on in the live sessions, and I have not
              done the mongodb prism lecture yet, but was able to figure out the
              mongodb from some of the stuff Sagar taught us, plus reading their
              docs and doing some YouTube lessons on it.
            </li>
            <li>
              3. I broke down the project into two groups, a frontend and a
              backend and created the folders on my local system as well as a
              GitHub frontend and backend repository. Sagar taught us some
              express, so I used that on the backend. I used Get API, Post API
              and Patch API calls from the frontend and handled their responses.
              The backend connected to the mongo database (initially locally but
              figured out how to make it work from the internet). I downloaded
              mongo atlas to enter some test data, but eventually would read and
              write to mongodb using my code.
            </li>
            <li>
              4. To be able to switch paths I created a navbar.js routine. In
              the App.js routine I created several Routes from the
              react-router-dom library. I even made some of these routes
              protected-routes. In the navbar routine I used Links and imported
              the useNavigate hook.
            </li>
            <li>
              5. Once I figured out how to get from page to page and back, I
              started building each page. I took reusable parts of my index page
              and moved it into the header routine and then took the header
              routine which included the navbar routine and put that in each
              page I created. I also started to change the index code to replace
              some of the inline styling with imported CSS.
            </li>
            <li>
              6. Next, although in this type of project I was not sure how I
              would use it, I created a customer signup/login routine. I added a
              footer with the company address, and since I have the phone number
              and email in the header section I decided to scrap the contact
              page and make it a chat-with-us page. I created another page
              called locations-served to let customers see if their delivery
              location zip code is in an area we serve. I came up with a lot of
              ideas I wanted to add to this website but limited the scope for
              this project. After this course is over, I will come back to this
              project and add some additional features.
            </li>
            <li>
              7. I added a signup page and profile page where a user can update
              their information. I gave the profile route protection since it
              could have customer information on it. During testing when I was not
              logged in or a token was not yet generated you would be redirected
              to the login page if you tried to access the profile page.
            </li>
            <li>
              8. I created a Rental Equipment link to display the equipment we
              rent but decided to use this as an opportunity to learn how to do a dropdown
              menu in React (Since we never learned this in this course, I
              watched a YouTube video on this). In one of the dropdown links I
              added some pictures by importing them from an images directory and
              in another dropdown link I added the images in from the mongo
              database as a url pic. I did this by grabbing the entire db
              collection and iterating through each document using map. However,
              during testing this feature, I found a problem. Since this is a
              site where I want internet traffic to move around freely and if
              you visited the rental equipment section before logging in, the
              token check in the header would fail and the pages with backend
              connections would not display any database data. To fix this I had
              to add a guest login and password so if a customer never logged
              in, they could still navigate the site correctly. Unfortunately,
              this affected the protected routes.
            </li>
            <li>
              9. The next feature was getting the Locations-Served page to work.
              The original idea was to display a map, and clicking on it
              would tell if we delivered to that area, you also could search by
              zip code or city/state. This became too complicated, so I scaled
              the routine down for now to enter a zip code in a useForm hook and
              compare it to one stored in the database. If it is there it sends
              a "confirmation alert" or if not, "sorry this zip code is not in our
              delivery area alert". To easily add the zip codes, I created an
              add-zip routine and put it in the navbar. In the final version for
              the web, I will remove it.
            </li>
            <li>
              10. Now with the frontend working, I moved on to the backend. I
              needed to handle the API calls. I used some of the express
              routines Sagar and Sachin showed us and reworked them to handle my
              frontend which unfortunately was very different from the song list
              routine Sagar showed us. I had to first try to figure out what
              Sagar’s routines were doing and then write my own routines for the
              copier and printer rental stuff. I was able to use some of his
              ideas for the users and handling of some of the API calls, since
              other than the couple days we worked on this we were not taught
              much about this part.
            </li>
            <li>
              11. I went on the zoom doubt clearing session for help with some
              issues and one of the helpers gave me a link to learn how to build
              a react chat using socketIO. It is an older routine and has a lot
              of code that does not work but I used it to teach me about chat
              routines and once I understand it then I will make one like it but
              hopefully better. Chat routines are another thing we were never
              taught. Update: I reworked the chat with no socketIO. Got it to
              send the user info and message to a chats collection in the
              database. When I return to this project after I finish the FSD
              course I can try to add an app on my phone or in an admin section
              of this project and read and respond to what is stored in the
              database. I also will make this website mobile friendly.
            </li>
            <li>
              12. I am sorry for writing such a detailed novel on this project,
              but my hope is that in future courses you can address some of the
              topics we did not cover well enough and better prepare future
              students. As for the prism lectures, I learned a lot from them but
              spent so many hours fixing bugs in the downloaded code and the
              exercises. None of the assignments graded correctly and I am
              saving them for the last thing I do in this course because of it.
            </li>
            <li>
              13. I learned a lot from the Hackathon and even more from doing
              this Capstone project, but not having a live teacher during this
              project to help with things we were never taught made it tougher.
            </li>
            <li>
              14. Future enhancements to the project are to make the home page a
              little more modern, a better chat, figure out a way to let the
              user check our delivery locations with a map click and add in a
              logged-in-customer-only site to track in real time their equipment
              delivery.
            </li>
            <li>
              15. For deploying this project, I tried Heroku, but it seemed like
              you had to pay for it now, and it was complicated also. So, I went with
              Vercel for the frontend and Render for the backend. So far it has
              been free to use and has worked pretty well.
            </li>
          </h2>
        </ul>
      </p>
    </Fragment>
  );
}

export default About;
