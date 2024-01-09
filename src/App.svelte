<svelte:options customElement="tabs-test-facilty-management" />

<script>
  import { onDestroy, onMount } from "svelte";
  import Accordian from "./lib/Accordian.svelte";
  import AccordianItem from "./lib/AccordianItem.svelte";

  let sections = [];
  let selected = 0;
  let observers = [];
  let isClicking = false;

  function scrollIntoView(index) {
    isClicking = true;
    sections[index].scrollIntoView({ behavior: "smooth", block: "start" });
    selected = index;
    setTimeout(() => (isClicking = false), 500);
  }

  onMount(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.65,
    };

    sections.forEach((section, index) => {
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isClicking) {
            selected = index;
          }
        });
      }, options);

      observer.observe(section);
      observers.push(observer);
    });
  });

  onDestroy(() => {
    observers.forEach((observer) => observer.disconnect());
  });
</script>

<div class="container">
  <div class="scroll-container">
    <div class="features">
      <h3>Jump to Section</h3>
      <button class:selected={selected === 0} on:click={() => scrollIntoView(0)}
        >Schedule of Test Labs</button
      >
      <button class:selected={selected === 1} on:click={() => scrollIntoView(1)}
        >Add or Modify Test Lab</button
      >
      <button class:selected={selected === 2} on:click={() => scrollIntoView(2)}
        >Schedule Maintenance & Calibration</button
      >
      <button class:selected={selected === 3} on:click={() => scrollIntoView(3)}
        >Configure Lab Timings</button
      >
      <button class:selected={selected === 4} on:click={() => scrollIntoView(4)}
        >Define Roles and Assign Users</button
      >
      <button class:selected={selected === 5} on:click={() => scrollIntoView(5)}
        >Configure Capacity & Capabilities</button
      >
      <button class:selected={selected === 6} on:click={() => scrollIntoView(6)}
        >Maintenance and Calibration Records</button
      >
      <button class:selected={selected === 7} on:click={() => scrollIntoView(7)}
        >Conflict Notification</button
      >
      <button class:selected={selected === 8} on:click={() => scrollIntoView(8)}
        >Smart Permissions</button
      >
      <button class:selected={selected === 9} on:click={() => scrollIntoView(9)}
        >Watch Live</button
      >
      <button class:selected={selected === 10} on:click={() => scrollIntoView(10)}
        >More Features</button
      >
    </div>
    <section class="scrollable">
      <article
        class="panel"
        class:selected={selected === 0}
        bind:this={sections[0]}
      >
        <p>
          Access a consolidated view of all scheduled events on the test
          facilities. Effortlessly observe the details of each reservation and
          reserve labs for events, including test requests
        </p>
        <img
          src="https://static.wixstatic.com/media/454d4b_047eed2219aa48d3ac9d4fba777bef35~mv2.png"
          alt="Create Issues from Test"
        />
      </article>
  
      <article
        class="panel"
        class:selected={selected === 1}
        bind:this={sections[1]}
      >
        <p>
          Create test labs and adjust your lab settings to accommodate evolving
          requirements. Manage supplier information, including their contact
          details, for seamless coordination.
        </p>
        <img
          src="https://static.wixstatic.com/media/454d4b_2fe7c38b412e4f908227f50809a3e8da~mv2.png"
          alt="Issue dashboard"
        />
      </article>
  
      <article
        class="panel"
        class:selected={selected === 2}
        bind:this={sections[2]}
      >
        <p>
          Sync schedules seamlessly, from recurring calibrations for precision to
          timely maintenance alerts, ensuring your lab operates at peak
          reliability and performance.
        </p>
        <img
          src="https://static.wixstatic.com/media/454d4b_2873971af3ff436199584bee57918492~mv2.png"
          alt="Categorize Issues"
        />
      </article>
  
      <article
        class="panel"
        class:selected={selected === 3}
        bind:this={sections[3]}
      >
        <p>
          Define operational hours for your lab, streamlining test execution
          according to your preferred timings and maximize resource efficiency by
          aligning facility hours with your needs.
        </p>
        <img
          src="https://static.wixstatic.com/media/454d4b_cc6ed2f42bf149aba67a7d322abfa288~mv2.png"
          alt="Stay informed"
        />
      </article>
  
      <article
        class="panel"
        class:selected={selected === 4}
        bind:this={sections[4]}
      >
        <p>
          Include users for defined roles to streamline responsibilities.
          Efficiently delegate tasks for a well-oiled testing process.
        </p>
        <img
          src="https://static.wixstatic.com/media/454d4b_a3dcbcda344c46098cf8d9ceed1c094a~mv2.png"
          alt="Capture Root Cause and Add Countermeasures"
        />
      </article>
  
      <article
        class="panel"
        class:selected={selected === 5}
        bind:this={sections[5]}
      >
        <p>
          Limit the concurrent tests in each lab to avoid conflicts and maintain
          peak capacity. Map tests to specific labs for streamlined planning and
          efficient resource usage.
        </p>
        <img
          src="https://static.wixstatic.com/media/454d4b_1ccfb3a3cc9e490eae5a27871851aae4~mv2.png"
          alt="Prioritize Issues"
        />
      </article>
  
      <article
        class="panel"
        class:selected={selected === 6}
        bind:this={sections[6]}
      >
        <p>
          Access comprehensive records for maintenance and calibration tasks,
          keeping a complete history. Easily track records for audits and quality
          assurance.
        </p>
        <img
          src="https://static.wixstatic.com/media/454d4b_cdb8c622c4be4bacbf3bb96ac97f09ce~mv2.png"
          alt="Link Issues"
        />
      </article>
  
      <article
        class="panel"
        class:selected={selected === 7}
        bind:this={sections[7]}
      >
        <p>
          Prevent overbooking with intelligent conflict detection, eliminating
          double-booked resources assisting in smooth operations with no
          unnecessary interruptions.
        </p>
        <img
          src="https://static.wixstatic.com/media/454d4b_79b9e21a78e14b92af80c49607e05dc5~mv2.png"
          alt="Watch Live"
        />
      </article>
  
      <article
        class="panel"
        class:selected={selected === 8}
        bind:this={sections[8]}
      >
        <p>
          Tailor user permissions to ensure security and data integrity and
          safeguard your lab’s sensitive information with precise user and
          multiple team access.
        </p>
        <img
          src="https://static.wixstatic.com/media/454d4b_d869aa76548c4adeb21d320aa3969875~mv2.png"
          alt="Issue Statistics"
        />
      </article>
  
      <article
        class="panel"
        class:selected={selected === 9}
        bind:this={sections[9]}
      >
        <p>
          Tune in live to monitor test executions, making critical decisions in
          real-time and ensure quality and efficiency as you virtually oversee
          testing labs.
        </p>
        <img
          src="https://static.wixstatic.com/media/454d4b_a0d4c61e861d4438be98ce5a470215d9~mv2.png"
          alt="User Time Log"
        />
      </article>
  
      <article
        class="panel"
        class:selected={selected === 10}
        bind:this={sections[10]}
      >
        <p>More features include</p>
        <img
          src="https://static.wixstatic.com/media/b8fe2a_c9114b3c038142c78d0a2f2ebf01a4ea~mv2.png"
          alt="More Features"
        />
      </article>
    </section>
  </div>
  

  <section class="accordian">
    <Accordian>
      <AccordianItem>
        <svelte:fragment slot="title">Schedule of Test Labs</svelte:fragment>
        <p>
          Access a consolidated view of all scheduled events on the test facilities. Effortlessly observe the details of each reservation and reserve labs for events, including test requests.
        </p>
        <img
          src="https://static.wixstatic.com/media/454d4b_047eed2219aa48d3ac9d4fba777bef35~mv2.png"
          alt="Schedule of Test Labs"
        />
      </AccordianItem>

      <AccordianItem>
        <svelte:fragment slot="title">Add or Modify Test Lab</svelte:fragment>
        <p>
          Create test labs and adjust your lab settings to accommodate evolving
          requirements. Manage supplier information, including their contact
          details, for seamless coordination.
        </p>
        <img
          src="https://static.wixstatic.com/media/454d4b_2fe7c38b412e4f908227f50809a3e8da~mv2.png"
          alt="Add or Modify Test Lab"
        />
      </AccordianItem>

      <AccordianItem>
        <svelte:fragment slot="title"
          >Schedule Maintenance & Calibration</svelte:fragment
        >
        <p>
          Sync schedules seamlessly, from recurring calibrations for precision
          to timely maintenance alerts, ensuring your lab operates at peak
          reliability and performance.
        </p>
        <img
          src="https://static.wixstatic.com/media/454d4b_2873971af3ff436199584bee57918492~mv2.png"
          alt="Schedule Maintenance & Calibration"
        />
      </AccordianItem>

      <AccordianItem>
        <svelte:fragment slot="title">Configure Lab Timings</svelte:fragment>
        <p>
          Define operational hours for your lab, streamlining test execution
          according to your preferred timings and maximize resource efficiency
          by aligning facility hours with your needs.
        </p>
        <img
          src="https://static.wixstatic.com/media/454d4b_cc6ed2f42bf149aba67a7d322abfa288~mv2.png"
          alt="Configure Lab Timings"
        />
      </AccordianItem>

      <AccordianItem>
        <svelte:fragment slot="title"
          >Define Roles and Assign Users</svelte:fragment
        >
        <p>
          Include users for defined roles to streamline responsibilities. Efficiently delegate tasks for a well-oiled testing process.
        </p>
        <img
          src="https://static.wixstatic.com/media/454d4b_a3dcbcda344c46098cf8d9ceed1c094a~mv2.png"
          alt="Define Roles and Assign Users"
        />
      </AccordianItem>

      <AccordianItem>
        <svelte:fragment slot="title"
          >Configure Capacity & Capabilities</svelte:fragment
        >
        <p>
          Set limits on the number of tests that can run simultaneously in your lab, preventing conflicts and ensuring your lab operates at peak capacity without overloading. Additionally, leverage
          the capability to map tests to specific labs for streamlined
          planning and optimal resource utilization.
        </p>
        <img
          src="https://static.wixstatic.com/media/454d4b_1ccfb3a3cc9e490eae5a27871851aae4~mv2.png"
          alt="Configure Capacity & Capabilities"
        />
      </AccordianItem>

      <AccordianItem>
        <svelte:fragment slot="title"
          >Maintenance and Calibration Records</svelte:fragment
        >
        <p>
          Access comprehensive records for maintenance and calibration tasks, keeping a complete history. Easily track records for audits
          and quality assurance.
        </p>
        <img
          src="https://static.wixstatic.com/media/454d4b_cdb8c622c4be4bacbf3bb96ac97f09ce~mv2.png"
          alt="Maintenance and Calibration Records"
        />
      </AccordianItem>

      <AccordianItem>
        <svelte:fragment slot="title">Conflict Notification</svelte:fragment>
        <p>
          Prevent overbooking with intelligent conflict detection, eliminating double-booked resources assisting in smooth operations with no unnecessary interruptions.
        </p>
        <img
          src="https://static.wixstatic.com/media/454d4b_a0d4c61e861d4438be98ce5a470215d9~mv2.png"
          alt="Conflict Notification"
        />
      </AccordianItem>

      <AccordianItem>
        <svelte:fragment slot="title">Smart Permissions</svelte:fragment>
        <p>
          Tailor user permissions to ensure security and data integrity and safeguard your lab’s sensitive information with precise user and multiple team access.
        </p>
        <img
          src="https://static.wixstatic.com/media/454d4b_d869aa76548c4adeb21d320aa3969875~mv2.png"
          alt="Smart Permissions"
        />
      </AccordianItem>

      <AccordianItem>
        <svelte:fragment slot="title">More Features</svelte:fragment>
        <p>More features include</p>
        <img
          src="https://static.wixstatic.com/media/b8fe2a_18096b6ad804432ba47aeb5ef21b94c7~mv2.png"
          alt="More Features"
        />
      </AccordianItem>
    </Accordian>
  </section>
</div>

<style>
 
  ::-webkit-scrollbar {
    width: 6px; /* Set the width of the scrollbar */
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: orangered; /* Color of the scrollbar thumb */
    border-radius: 10px; /* Roundness of the scrollbar thumb */
  }
  .scrollable {
    height: 560px;
    overflow-y: scroll;
    margin-top: 4.5em;
  }
  .features {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .scrollable .panel {
    height: 100%;

    padding: 2.5em 1em;
    display: flex;
   
    flex-direction: column-reverse;
  }

  .panel p {
    
    color: #333333d0;
    margin-top: 3em;
  }

  .features button {
    font-family: "Montserrat", sans-serif;
    display: block;
    font-weight: semibold;
    font-size: 16px;
    background-color: transparent;

    border: none;
    padding: 1em 32px;
    cursor: pointer;

    border-left: 2px solid #cccccc20;
    letter-spacing: 0.4px;
    white-space: nowrap;
    width: 100%;
    text-align: left;

    color: #717171;
    position: relative;
    transition: color 0.5s ease-in-out;
  }

  .features h3{
    text-transform: uppercase;
    margin-bottom: 2.3em;
   
    color: #717171;
  }

  .features button::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 6px;
    height: 0;
    background-color: orangered;
    /* Transition effect for height */
    transition: height 0s;
  }
  .features button.selected::after {
    height: 100%; /* Sets the height to 100% when button is selected */
    transition: height 1s ease;
  }

  .features .selected {
    color: orangered;
  }

  .container {
    font-family: "Montserrat", sans-serif;
    background: white;
    
  }
  * {
    box-sizing: border-box;
  }

  .container {
    font-size: 16px;
   
  }

  .scroll-container{
    display: flex;
    gap: 120px;
    padding: 4em 2em;
    border-radius: 20px;
    box-shadow: 0px 0px 8px 0px #00000020;
  }
  .accordian {
    display: none;
  }

  p {
    text-align: center;
    color: #333333;
  }
  img {
    width: 100%;

    height: 80%;

    object-fit: contain;
  }

  .panel img {
    transition: opacity 0.5s ease-in-out;
    opacity: 0.2;
  }

  article.panel.selected img {
    opacity: 1;
  }

  .panel p {
    transition: opacity 0.5s ease-in-out;
    opacity: 0.2;
  }

  article.panel.selected p {
    opacity: 1;
  }

  @media (min-width: 1600px) {
    .container {
      font-size: 18px;
    }
    .features button {
      font-size: 20px;
    }

    .panel p{
      font-size: 18px;
    }
  }

  @media (max-width: 1000px) {
    .container {
      font-size: 14px; /* Decrease the font size for mobile */
    }

    .scrollable{
      height: 400px;
    }
    .features button {
      font-size: 12px;
    }
  }

  @media (max-width: 795px) {
    .container {
      font-size: 12px; /* Decrease the font size for mobile */
    }
    img {
      height: 250px;
    }
    .accordian {
      display: block;
    }
    .scroll-container {
      display: none;
    }
  }
</style>
