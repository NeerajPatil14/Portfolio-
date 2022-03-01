window.addEventListener("load", function () {
  const workExperience = [
    {
      companyName: "LTI",
      companyURL: "https://www.lntinfotech.com/",
      title: "Cloud Services and Software Engineer",
      dateRange: "July 2021 - Present",
      jobDetails: ["Successfully completed Java full stack training.",
      "Certified Salesforce Administrator.",
      "Worked on 3 projects, solved the daily tickets that we were assigned during internal status call. Assisted the team in development and bug fixing.",
    ],
    },
    {
      companyName: "SmartBridge",
      companyURL: "https://www.thesmartbridge.com/",
      title: "Machine Learning Intern",
      dateRange: "15th May 2020 - 14th June 2020",
      jobDetails: [
        "Built an ML model, trained it to test it, did hyper-parameter optimization and created an endpoint.",
        "finally built a Web App to get input from the user and predicted life Expectancy using Machine Learning using IBM cloud services.",
      ],
    },
    {
      companyName: "FatCat Robotics",
      companyURL: "https://in.linkedin.com/company/fat-cat-robotics/",
      title: "IOT intern",
      dateRange: "18th March 2020 - 18th July 2020",
      jobDetails: [
        "Did data acquisition and stored the data on firebase and made a real-time web dashboard using React to display important parameters and controlling elements.",
        "Did image processing for intruder detection and detecting hotspots on solar panels."
      ],
    },
    {
      companyName: "VJTI",
      companyURL: "https://vjti.ac.in/",
      title: "Research Assistant",
      dateRange: "3rd December 2019 - 2nd January 2020",
      jobDetails: [
        "Done programming in Python language, did signal processing, performed fast Fourier transform, streamed data on Kipling, LJSTreamM, LJLogM and implemented it successfully on Labjack T7 pro DAQ. ",
        "We tried to fetch the data on Nvidia Jetson TX2 and then tried to perform the analysis. We did the analysis using  Wilcoxon PC420 for vibration, a temperature sensor for temperature sensing, and a strain gauge for measuring strain.",
      ],
    },{
      companyName: "Tan Swa",
      companyURL: "https://in.linkedin.com/company/tan-swa-technologies-inc---india",
      title: "Intern",
      dateRange: "5th June 2019 -29th June 2019",
      jobDetails: [
        "Performed testing, assembled PLC Panels.",
      ],
    },{
      companyName: "VESIT",
      companyURL: "https://vesitadmissions.ves.ac.in/",
      title: "Research Assistant",
      dateRange: "December 2018 - January 2019",
      jobDetails: [
        "Prepared Simulation-based study results for presentation and publication by collaborating with Interns on Photonic crystal based early cancer detection. ",
        "Compiled data in reports and other documents using Comsol Multiphysics.",
      ],
    },
  ];

  function showMobileMenu() {
    var nav = document.getElementById("mobile-nav-wrapper");
    nav.style.visibility = "visible";
    nav.style.transform = "translateX(0vw)";
    document.querySelector("#mobile-menu-button").classList.add("is-active");
  }

  function hideMobileMenu() {
    var nav = document.getElementById("mobile-nav-wrapper");
    nav.style.visibility = "hidden";
    nav.style.transform = "translateX(100vw)";
    document.querySelector("#mobile-menu-button").classList.remove("is-active");
  }

  function toggleMobileMenu() {
    var nav = document.getElementById("mobile-nav-wrapper");
    if (nav.style.visibility === "visible") {
      hideMobileMenu();
    } else {
      showMobileMenu();
    }
  }

  function addLineBreak() {
    let isMobile = window.matchMedia("(max-width: 500px)").matches;
    let mobileLineBreak = "";

    if (isMobile) {
      mobileLineBreak = "<br />";
    } else {
      mobileLineBreak = "";
    }

    return mobileLineBreak;
  }

  const initExperienceSection = () => {
    let br = addLineBreak();

    for (let i = 0; i < workExperience.length; i++) {
      document.querySelector("#jobList").innerHTML += `<li data-index=${i}>
                <div class="job-button ease-transition">${workExperience[i].companyName}</div>
            </li>`;
    }

    document
      .querySelectorAll("#jobList > li div")[0]
      .classList.add("job-button-selected");

    document.querySelector(
      ".jobTitle"
    ).innerHTML = `${workExperience[0].title} ${br} <span class="at-symbol">@</span> <a class="animate-links" href="${workExperience[0].companyURL}" target="_blank">${workExperience[0].companyName}</a>`;

    document.querySelector(".jobDateRange").textContent =
      workExperience[0].dateRange;

    workExperience[0].jobDetails.forEach((bullet) => {
      document.querySelector(
        "#job-bulletpoints ul"
      ).innerHTML += `<li>${bullet}</li>`;
    });
  };

  function renderExperienceSection(event) {
    if (event.target.matches(".job-button-selected")) {
      return;
    } else {
      let br = addLineBreak();

      document.querySelector("#job-bulletpoints ul").innerHTML = "";

      let index = event.target.parentElement.attributes["data-index"].value;

      document.querySelector(
        ".jobTitle"
      ).innerHTML = `${workExperience[index].title} ${br} <span class="at-symbol">@</span> <a class="animate-links" href="${workExperience[index].companyURL}" target="_blank">${workExperience[index].companyName}</a>`;

      document.querySelector(".jobDateRange").textContent =
        workExperience[index].dateRange;

      workExperience[index].jobDetails.forEach((bullet) => {
        document.querySelector(
          "#job-bulletpoints ul"
        ).innerHTML += `<li>${bullet}</li>`;
      });

      document
        .querySelectorAll("#jobList li div")
        .forEach((el) => el.classList.remove("job-button-selected"));
      event.target.classList.add("job-button-selected");
    }
  }

  function smoothScrollToCenter(elementId) {
    const el = document.getElementById(elementId);

    const position = elementId === "projects-section" ? "start" : "center";

    el.scrollIntoView({
      behavior: "smooth",
      block: position,
      inline: position,
    });
  }

  document.addEventListener(
    "click",
    function (event) {
      if (event.target.matches(".job-button")) {
        renderExperienceSection(event);
      }
    },
    false
  );

  document.addEventListener(
    "click",
    function (event) {
      if (event.target.matches(".navLink")) {
        console.log(event.target.attributes[1].value);
        smoothScrollToCenter(event.target.attributes[1].value);
      }
    },
    false
  );

  document
    .querySelector("#mobile-menu-button")
    .addEventListener("click", toggleMobileMenu);

  document
    .querySelector("#mobile-nav-tap-close-background")
    .addEventListener("click", hideMobileMenu);

  let mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
  mobileNavLinks.forEach((el) => el.addEventListener("click", hideMobileMenu));

  initExperienceSection();
});
