<svelte:options customElement="home-accordians" />

<script>
  import Accordian from "./lib/Accordian.svelte";
  import AccordianItem from "./lib/AccordianItem.svelte";

  import { fade } from "svelte/transition";
</script>

<section class="accordian-container">
  <h1>
    <span>All-in-one</span> verification hub to optimize your product testing process
  </h1>
  <div class="accordian">
    <Accordian>
      <AccordianItem>
        <svelte:fragment slot="title">Requirement Analysis</svelte:fragment>
        <article>
          <p>
            Trace, record, analyze, and prioritize the requirements to
            successfully fulfil all product testing goals.
          </p>
          <div class="image-container" transition:fade={{ duration: 800 }}>
            <img
              src="https://static.wixstatic.com/media/43794f_bbc6cbbe424c4c8ebe4ac6b519cbd45d~mv2.png"
              alt="Resources Availability Status in Real-time"
            />
          </div>
        </article>
      </AccordianItem>
      <AccordianItem>
        <svelte:fragment slot="title">Verification Planning</svelte:fragment>
        <article>
          <p>
            Easily verify your product's performance as per the requirements
            defined by engineers during the design phase. You can also easily
            track progress while the test is going on.
          </p>
          <div class="image-container" transition:fade={{ duration: 800 }}>
            <img
              src="https://static.wixstatic.com/media/43794f_cca6ab06d6a8420aacec8e823436c90d~mv2.png"
              alt="Resource Assignment"
            />
          </div>
        </article>
      </AccordianItem>
      <AccordianItem>
        <svelte:fragment slot="title">Maximum Test Coverage</svelte:fragment>
        <article>
          <p>
            Test coverage improves the quality of test cases while you create
            and reuse the same test cases several times. All you have to do is
            change the testing parameters with different values.
          </p>
          <div class="image-container" transition:fade={{ duration: 800 }}>
            <img
              src="https://static.wixstatic.com/media/43794f_1e87966fdfbc4982b002bcb988717bab~mv2.png"
              alt="Resource Assignment"
            />
          </div>
        </article>
      </AccordianItem>
      <AccordianItem>
        <svelte:fragment slot="title">Traceability Matrix</svelte:fragment>
        <article>
          <p>
            The TITAN traceability matrix helps keep track of every level of
            testing, enables 100% test coverage for all business and functional
            requirements, updates all requirements status in real-time, and
            analyzes the impact of requirement changes.
          </p>
          <div class="image-container" transition:fade={{ duration: 800 }}>
            <img
              src="https://static.wixstatic.com/media/43794f_cca6ab06d6a8420aacec8e823436c90d~mv2.png"
              alt="Resource Assignment"
            />
          </div>
        </article>
      </AccordianItem>
    </Accordian>
  </div>
</section>

<section class="accordian-container right-align">
  <h1>
    Orchestrate your testing schedule, collaborate with teams, and take
    advantage of <span>optimum resource allocation</span>
  </h1>
  <div class="accordian">
    <Accordian>
      <AccordianItem alignRight={true}>
        <svelte:fragment slot="title">Prototype Management</svelte:fragment>
        <article>
          <p>
            Enable your teams to interact effectively, keep track of resources
            in real-time and avoid double-booking while minimizing conflicts
            between teams over testing resources.
          </p>
          <div class="image-container" transition:fade={{ duration: 800 }}>
            <img
              src="https://static.wixstatic.com/media/43794f_7f42670e3f95466eac63adc9f07367e1~mv2.png"
              alt="Resources Availability Status in Real-time"
            />
          </div>
        </article>
      </AccordianItem>
      <AccordianItem alignRight={true}>
        <svelte:fragment slot="title"
          >Integrated Work Order management</svelte:fragment
        >
        <article>
          <p>
            Standardize and effortlessly map all your business processes to
            streamline operation with more accountability and zero ambiguity. No
            matter how stringent or complex your testing environment is, Titan
            offers a seamless experience, every time!
          </p>
          <div class="image-container" transition:fade={{ duration: 800 }}>
            <img
              src="https://static.wixstatic.com/media/454d4b_52cd0f152dfc424e9bb2295e1f81ad3a~mv2.png"
              alt="Resource Assignment"
            />
          </div>
        </article>
      </AccordianItem>
      <AccordianItem alignRight={true}>
        <svelte:fragment slot="title"
          >Assets and Resource Management</svelte:fragment
        >
        <article>
          <p>
            Enjoy an easy-to-use system to streamline the entire test scheduling
            process from receiving test requests, to filtering and assigning
            them to a resource, and finally executing the test.
          </p>
          <div class="image-container" transition:fade={{ duration: 800 }}>
            <img
              src="https://static.wixstatic.com/media/43794f_9870822e316c44288988df8b201fabed~mv2.png"
              alt="Resource Assignment"
            />
          </div>
        </article>
      </AccordianItem>
    </Accordian>
  </div>
</section>

<section class="accordian-container">
  <h1>
    Embrace the <span>robust</span> features that make test management a cakewalk
    for your team
  </h1>
  <div class="accordian">
    <Accordian>
      <AccordianItem>
        <svelte:fragment slot="title"
          >Team Collaboration and Conflict Management</svelte:fragment
        >
        <article>
          <p>
            Meet the needs of your users by testing your prototype with real
            consumers and validating your product concept before development. An
            ideal tool for prototype specifications management and tracking them
            for every test run.
          </p>
          <div class="image-container" transition:fade={{ duration: 800 }}>
            <img
              src="https://static.wixstatic.com/media/43794f_da4b8397358543c6b3a5a0e7e5e731e2~mv2.png"
              alt="Resources Availability Status in Real-time"
            />
          </div>
        </article>
      </AccordianItem>
      <AccordianItem>
        <svelte:fragment slot="title">Process Standardization</svelte:fragment>
        <article>
          <p>
            Track the work order process, use various work orders associated
            with your assets, test articles, build, and report progress to
            requesters, so they know the value you produce.
          </p>
          <div class="image-container" transition:fade={{ duration: 800 }}>
            <img
              src="https://static.wixstatic.com/media/43794f_52ed51684fba42be93fab4418ba9234e~mv2.png"
              alt="Resource Assignment"
            />
          </div>
        </article>
      </AccordianItem>
      <AccordianItem>
        <svelte:fragment slot="title">Test Management</svelte:fragment>
        <article>
          <p>
            Automatically manage your test lab, conduct equipment inventory,
            manage preventive maintenance schedule and derive insights into a
            lab's performance to boost productivity and update the team on test
            lab specifications.
          </p>
          <div class="image-container" transition:fade={{ duration: 800 }}>
            <img
              src="https://static.wixstatic.com/media/43794f_8ecfb0a9946843ff9925fbb43f3df792~mv2.png"
              alt="Resource Assignment"
            />
          </div>
        </article>
      </AccordianItem>
    </Accordian>
  </div>
</section>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap");

  * {
    box-sizing: border-box;
  }

  h1 {
    max-width: 550px;
    font-size: 32px;
    font-family: "Montserrat", sans-serif;
    font-weight: 800;
    color: #253858;
    padding: 0 0.5em;
  }

  h1 span {
    color: #008afc;
  }
  .accordian {
    width: 45vw;

    color: #253858;
    font-size: 14px;
  }

  .accordian-container {
    position: relative;
    min-height: 550px;
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin-bottom: 5em;
  }

  .right-align {
    align-items: flex-end;
    text-align: right;
  }

  .right-align .image-container {
    left: 0;
  }

  .right-align h1 span {
    color: #8d7ad3;
  }

  p {
    font-family: "Montserrat", sans-serif;
    color: black;
    font-weight: 300;
    margin: 0;
    letter-spacing: 1px;
  }

  .image-container {
    width: 45vw;

    top: 0;
    height: min-content;

    right: 0;
    position: absolute;
    margin: 2em;
  }

  @media screen and (min-width: 1650px) {
    .image-container {
      width: 750px;
    }
  }
  img {
    object-fit: contain;
    margin-top: 4em;
    width: inherit;
    position: relative;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 12px;
    z-index: 222222;
  }
  .image-container::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 20%;
    aspect-ratio: 16/14;
    background-color: #008afc;
    border-radius: 20px;
    opacity: 0.2;
    animation: breathe 7s linear infinite;
  }

  .right-align .image-container::after {
    background-color: #8d7ad3;
  }

  .right-align .image-container::before {
    background-color: #8d7ad3;
  }

  .image-container::after {
    content: "";
    position: absolute;
    left: 0;

    bottom: 0;
    width: 13%;
    aspect-ratio: 1/1;

    background-color: #008afc;
    border-radius: 20px;
    opacity: 0.2;

    animation: breathe2 4s ease-in infinite;
  }

  @keyframes breathe {
    0% {
      transform: translate(40px, 30px);
    }
    50% {
      transform: translate(15px, 40px);
    }
    100% {
      transform: translate(40px, 30px);
    }
  }

  @keyframes breathe2 {
    0% {
      transform: translate(-20px, 10px);
    }
    50% {
      transform: translate(-20px, 20px);
    }
    100% {
      transform: translate(-20px, 10px);
    }
  }

  article {
    background-color: rgba(220, 220, 220, 0.175);
    padding: 0 3.8em;
    padding-bottom: 2em;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }
  @media screen and (max-width: 1100px) {
    .accordian {
      width: 100%;
      font-size: 14px;
    }

    .accordian-container {
      position: relative;
      min-height: 550px;
      display: flex;
      flex-direction: column;
      gap: 25px;
      margin-bottom: 2em;
    }

    .image-container {
      width: 60vw;

      position: relative;
      margin: 0 auto;
    }

    h1 {
      font-size: 20px;
    }
    article {
      padding: 2em 3em;
      padding-top: 0;
    }

    img {
      border-radius: 10px;
    }
    .image-container::after {
      border-radius: 10px;
    }

    .image-container::before {
      border-radius: 10px;
    }

    .right-align {
      text-align: left;
    }
  }

  @media screen and (max-width: 500px) {
    .accordian {
      width: 100%;
      font-size: 12px;
    }

    img {
      border-radius: 5px;
    }
  }

  @media screen and (min-width: 1950px) {
    .accordian {
      font-size: 20px;
    }

    .accordian-container {
      max-width: 1920px;
      margin: 0 auto;
    }

    h1 {
      font-size: 36px;
    }
  }
</style>
