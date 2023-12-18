<svelte:options customElement="tabs-issue-management" />

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
        <svelte:fragment slot="title">Create Issues from Test</svelte:fragment>
        <p>
          You can create an incident from a test and skip entering all the meta
          data twice. Navigate through issue workflows with ease. The Progress
          Tracker empowers your teams to efficiently move through stages – from
          identifying the problem to its resolution, ensuring accountability at
          every step.
        </p>
        <img
          src="https://static.wixstatic.com/media/454d4b_2121622bbe544ff28cd800186d9401fb~mv2.png"
          alt="Create Issues from Test"
        />
      </AccordianItem>
      <AccordianItem>
        <svelte:fragment slot="title">Issue dashboard</svelte:fragment>
        <p>
          You can visualize all the Test Incidents related to the team,
          individual team members, or to the individual or team the incidents
          are assigned to for resolution. Easy sort, filter and search functions
          to assist.
        </p>
        <img
          src="https://static.wixstatic.com/media/454d4b_f3cf27268e8746198601080f376c65f5~mv2.png"
          alt="Issue dashboard"
        />
      </AccordianItem>
      <AccordianItem>
        <svelte:fragment slot="title">Categorize Issues</svelte:fragment>
        <p>
          Classify issues effortlessly based on their source, ensuring a
          targeted approach to resolution. Prototype hiccups, test lab glitches,
          equipment malfunctions – Titan sees them all.
        </p>
        <img
          src="https://static.wixstatic.com/media/454d4b_34c7006545d1409b839bfb584001cfcd~mv2.png"
          alt="Categorize Issues"
        />
      </AccordianItem>
      <AccordianItem>
        <svelte:fragment slot="title">Stay informed</svelte:fragment>
        <p>
          Assign issue to the appropriate individual to judge and assess whether
          it is an incident or concern. Add watchers to incidents so email
          notifications for important updates are automatically sent to users,
          like being assigned a new incident or when status changes for an
          incident.
        </p>
        <img
          src="https://static.wixstatic.com/media/454d4b_4d66868a04d84cc796b04397a37a3089~mv2.png"
          alt="Stay informed"
        />
      </AccordianItem>
      <AccordianItem>
        <svelte:fragment slot="title">Capture Root Cause and Add Countermeasures</svelte:fragment>
        <p>
          Go beyond surface-level problems. Titan's root cause analysis dives
          deep, allowing you to capture the essence of issues. Craft effective
          countermeasures to fortify your processes against future challenges.
        </p>
        <img
          src="https://static.wixstatic.com/media/454d4b_c82b92e53f5b4df1a5e96334ccdba136~mv2.png"
          alt="Capture Root Cause and Add Countermeasures"
        />
      </AccordianItem>
      <AccordianItem>
        <svelte:fragment slot="title">Prioritize Issues</svelte:fragment>
        <p>
          Prioritize tasks seamlessly. From critical issues demanding immediate
          attention to low-priority concerns, Titan ensures that your team's
          efforts are strategically aligned with project goals.
        </p>
        <img
          src="https://static.wixstatic.com/media/454d4b_3c23c24dc3ac43b48aeb29a5bda621e7~mv2.png"
          alt="Prioritize Issues"
        />
      </AccordianItem>
      <AccordianItem>
        <svelte:fragment slot="title">Link Issues</svelte:fragment>
        <p>
          Forge connections effortlessly. Link issues to relevant test requests,
          work orders, and equipment. This ensures no duplications occur by
          linking multiple similar or identical incidents together and keep the
          context in one place.
        </p>
        <img
          src="https://static.wixstatic.com/media/454d4b_9e5255cd0ecc4c0d9c0a87da24607c32~mv2.png"
          alt="Link Issues"
        />
      </AccordianItem>
      <AccordianItem>
        <svelte:fragment slot="title">User Time Log</svelte:fragment>
        <p>
          Capture time investments with precision. The User Time Log in Titan
          provides a visual and quantitative understanding of the resources
          invested in issue resolution, fostering efficiency.
        </p>
        <img
          src="https://static.wixstatic.com/media/454d4b_94080f50a15544fbb42f762e13084019~mv2.png"
          alt="User Time Log"
        />
      </AccordianItem>
      <AccordianItem>
        <svelte:fragment slot="title">Issue Statistics</svelte:fragment>
        <p>
          Analyze trends and performance. Titan's Issue Statistics feature
          provides insightful data on issue creation, closure, and open issues,
          empowering your teams with data-driven insights for strategic
          decision-making.
        </p>
        <img
          src="https://static.wixstatic.com/media/454d4b_8417fed590f04b0f9eb098c5fadd83c1~mv2.png"
          alt="Issue Statistics"
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
