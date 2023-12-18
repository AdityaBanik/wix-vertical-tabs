<svelte:options customElement="tabs-test-facilty-management" />

<script>
  import Accordian from "./lib/Accordian.svelte";
  import AccordianItem from "./lib/AccordianItem.svelte";
  import TabLabel from "./lib/TabLabel.svelte";
  import Tabs from "./lib/Tabs.svelte";
  import { fade } from "svelte/transition";
  let activeTab = 1;
</script>

<div class="container">
  <section class="tabs">
    <Tabs>
      <TabLabel bind:group={activeTab} value={1}
        >Schedule of Test Labs ​</TabLabel
      >

      <TabLabel bind:group={activeTab} value={2}>Add or Modify Test Lab</TabLabel>

      <TabLabel bind:group={activeTab} value={3}>Schedule Maintenance & Calibration</TabLabel>

      <TabLabel bind:group={activeTab} value={4}>Configure Lab Timings </TabLabel>

      <TabLabel bind:group={activeTab} value={5}>
        Define Roles and Assign Users 
      </TabLabel>

      <TabLabel bind:group={activeTab} value={6}>Configure Capacity & Capabilities </TabLabel>

      <TabLabel bind:group={activeTab} value={7}>Maintenance and Calibration Records </TabLabel>

      <TabLabel bind:group={activeTab} value={8}>Conflict Notification</TabLabel>

      <TabLabel bind:group={activeTab} value={9}>Smart Permissions</TabLabel>

      <TabLabel bind:group={activeTab} value={10}>Watch Live</TabLabel>

      <TabLabel bind:group={activeTab} value={11}>More Features</TabLabel>

      <svelte:fragment slot="panel">
        {#if activeTab === 1}
          <article class="panel" in:fade>
            <p>
              Access a consolidated view of all scheduled events on the test facilities. Effortlessly observe the details of each reservation and reserve labs for events, including test requests
            </p>
            <img
              src="https://static.wixstatic.com/media/454d4b_047eed2219aa48d3ac9d4fba777bef35~mv2.png"
              alt="Create Issues from Test"
            />
          </article>
        {:else if activeTab === 2}
          <article class="panel" in:fade>
            <p>
              Create test labs and adjust your lab settings to accommodate evolving requirements. Manage supplier information, including their contact details, for seamless coordination.

            </p>
            <img
              src="https://static.wixstatic.com/media/454d4b_2fe7c38b412e4f908227f50809a3e8da~mv2.png"
              alt="Issue dashboard"
            />
          </article>
        {:else if activeTab === 3}
          <article class="panel" in:fade>
            <p>
              Sync schedules seamlessly, from recurring calibrations for precision to timely maintenance alerts, ensuring your lab operates at peak reliability and performance.

            </p>
            <img
              src="https://static.wixstatic.com/media/454d4b_2873971af3ff436199584bee57918492~mv2.png"
              alt="Categorize Issues"
            />
          </article>
        {:else if activeTab === 4}
          <article class="panel" in:fade>
            <p>
              Define operational hours for your lab, streamlining test execution according to your preferred timings and maximize resource efficiency by aligning facility hours with your needs.

            </p>
            <img
              src="https://static.wixstatic.com/media/454d4b_cc6ed2f42bf149aba67a7d322abfa288~mv2.png"
              alt="Stay informed"
            />
          </article>
        {:else if activeTab === 5}
          <article class="panel" in:fade>
            <p>
              Include users for defined roles to streamline responsibilities. Efficiently delegate tasks for a well-oiled testing process. 

            </p>
            <img
              src="https://static.wixstatic.com/media/454d4b_a3dcbcda344c46098cf8d9ceed1c094a~mv2.png"
              alt="Capture Root Cause and Add Countermeasures"
            />
          </article>
        {:else if activeTab === 6}
          <article class="panel" in:fade>
            <p>
              Set limits on the number of tests that can run simultaneously in your lab, preventing conflicts and ensuring your lab operates at peak capacity without overloading. Additionally, leverage the capability to map tests to specific labs for streamlined planning and optimal resource utilization.

            </p>
            <img
              src="https://static.wixstatic.com/media/454d4b_1ccfb3a3cc9e490eae5a27871851aae4~mv2.png"
              alt="Prioritize Issues"
            />
          </article>
        {:else if activeTab === 7}
          <article class="panel" in:fade>
            <p>
              Access comprehensive records for maintenance and calibration tasks, keeping a complete history. Easily track records for audits and quality assurance. 

            </p>
            <img
              src="https://static.wixstatic.com/media/454d4b_cdb8c622c4be4bacbf3bb96ac97f09ce~mv2.png"
              alt="Link Issues"
            />
          </article>
        {:else if activeTab === 8}
          <article class="panel" in:fade>
            <p>
              Prevent overbooking with intelligent conflict detection, eliminating double-booked resources assisting in smooth operations with no unnecessary interruptions. 

            </p>
            <img
              src="https://static.wixstatic.com/media/454d4b_a0d4c61e861d4438be98ce5a470215d9~mv2.png"
              alt="User Time Log"
            />
          </article>
        {:else if activeTab === 9}
          <article class="panel" in:fade>
            <p>
              Tailor user permissions to ensure security and data integrity and safeguard your lab’s sensitive information with precise user and multiple team access. 

            </p>
            <img
              src="https://static.wixstatic.com/media/454d4b_d869aa76548c4adeb21d320aa3969875~mv2.png"
              alt="Issue Statistics"
            />
          </article>
        {:else if activeTab === 10}
          <article class="panel" in:fade>
            <p>
              Tune in live to monitor test executions, making critical decisions in real-time and ensure quality and efficiency as you virtually oversee testing labs.

            </p>
            <img
              src="https://static.wixstatic.com/media/454d4b_79b9e21a78e14b92af80c49607e05dc5~mv2.png"
              alt="Watch Live"
            />
          </article>
        {:else if activeTab === 11}
          <article class="panel" in:fade>
            <p>More features include</p>
            <img
              src="https://static.wixstatic.com/media/b8fe2a_c9114b3c038142c78d0a2f2ebf01a4ea~mv2.png"
              alt="More Features"
            />
          </article>
        {/if}
      </svelte:fragment>
    </Tabs>
  </section>

  <section class="accordian">
    <Accordian>
      <AccordianItem>
        <svelte:fragment slot="title">Schedule of Test Labs</svelte:fragment>
        <p>
          Access a consolidated view of all scheduled events on the test
          facilities. Effortlessly observe the details of each reservation and
          reserve labs for events, including test requests.
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
        <svelte:fragment slot="title">Schedule Maintenance & Calibration</svelte:fragment>
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
        <svelte:fragment slot="title">Define Roles and Assign Users</svelte:fragment>
        <p>
          Include users for defined roles to streamline responsibilities.
          Efficiently delegate tasks for a well-oiled testing process.
        </p>
        <img
          src="https://static.wixstatic.com/media/454d4b_a3dcbcda344c46098cf8d9ceed1c094a~mv2.png"
          alt="Define Roles and Assign Users"
        />
      </AccordianItem>
      <AccordianItem>
        <svelte:fragment slot="title">Configure Capacity & Capabilities</svelte:fragment>
        <p>
          Set limits on the number of tests that can run simultaneously in your
          lab, preventing conflicts and ensuring your lab operates at peak
          capacity without overloading. Additionally, leverage the capability to
          map tests to specific labs for streamlined planning and optimal
          resource utilization.
        </p>
        <img
          src="https://static.wixstatic.com/media/454d4b_1ccfb3a3cc9e490eae5a27871851aae4~mv2.png"
          alt="Configure Capacity & Capabilities"
        />
      </AccordianItem>
      <AccordianItem>
        <svelte:fragment slot="title">Maintenance and Calibration Records</svelte:fragment>
        <p>
          Access comprehensive records for maintenance and calibration tasks,
          keeping a complete history. Easily track records for audits and
          quality assurance.
        </p>
        <img
          src="https://static.wixstatic.com/media/454d4b_cdb8c622c4be4bacbf3bb96ac97f09ce~mv2.png"
          alt="Maintenance and Calibration Records"
        />
      </AccordianItem>
      <AccordianItem>
        <svelte:fragment slot="title">Conflict Notification</svelte:fragment>
        <p>
          Prevent overbooking with intelligent conflict detection, eliminating
          double-booked resources assisting in smooth operations with no
          unnecessary interruptions.
        </p>
        <img
          src="https://static.wixstatic.com/media/454d4b_a0d4c61e861d4438be98ce5a470215d9~mv2.png"
          alt="Conflict Notification"
        />
      </AccordianItem>
      <AccordianItem>
        <svelte:fragment slot="title">Smart Permissions</svelte:fragment>
        <p>
          Tailor user permissions to ensure security and data integrity and
          safeguard your lab’s sensitive information with precise user and
          multiple team access.
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
  .container {
    font-family: "Montserrat", sans-serif;
    background-color: transparent;
    margin: 0;
    display: flex;

    align-items: center;
  }
  .container * {
    box-sizing: border-box;
  }

  .container {
    font-size: 16px;
    padding: 2em;
  }
  .accordian {
    display: none;
  }

  .panel {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    gap: 20px;
    height: 510px;
    max-width: 750px;
  }
  .tabs {
    width: 100%;
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
  @media (min-width: 1600px) {
    .container {
      font-size: 18px;
    }
  }

  @media (max-width: 950px) {
    .panel {
      height: 400px;
    }

    .container {
      font-size: 14px; /* Decrease the font size for mobile */
    }
  }

  @media (max-width: 600px) {
    .container {
      font-size: 12px; /* Decrease the font size for mobile */
    }
    img {
      height: 250px;
    }
    .accordian {
      display: block;
    }
    .tabs {
      display: none;
    }
  }
</style>
