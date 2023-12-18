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
        >Create Issues from Test ​</TabLabel
      >

      <TabLabel bind:group={activeTab} value={2}>Issue dashboard</TabLabel>

      <TabLabel bind:group={activeTab} value={3}>Categorize Issues</TabLabel>

      <TabLabel bind:group={activeTab} value={4}>Stay informed</TabLabel>

      <TabLabel bind:group={activeTab} value={5}>
        Capture Root Cause and Add Countermeasures
      </TabLabel>

      <TabLabel bind:group={activeTab} value={6}>Prioritize Issues</TabLabel>

      <TabLabel bind:group={activeTab} value={7}>Link Issues</TabLabel>

      <TabLabel bind:group={activeTab} value={8}>User Time Log</TabLabel>

      <TabLabel bind:group={activeTab} value={9}>Issue Statistics</TabLabel>

      <TabLabel bind:group={activeTab} value={10}>More Features</TabLabel>

      <svelte:fragment slot="panel">
        {#if activeTab === 1}
          <article class="panel" in:fade>
            <p>
              You can create an incident from a test and skip entering all the
              meta data twice. Navigate through issue workflows with ease. The
              Progress Tracker empowers your teams to efficiently move through
              stages – from identifying the problem to its resolution, ensuring
              accountability at every step.
            </p>
            <img
              src="https://static.wixstatic.com/media/454d4b_2121622bbe544ff28cd800186d9401fb~mv2.png"
              alt="Create Issues from Test"
            />
          </article>
        {:else if activeTab === 2}
          <article class="panel" in:fade>
            <p>
              You can visualize all the Test Incidents related to the team,
              individual team members, or to the individual or team the
              incidents are assigned to for resolution. Easy sort, filter and
              search functions to assist.
            </p>
            <img
              src="https://static.wixstatic.com/media/454d4b_f3cf27268e8746198601080f376c65f5~mv2.png"
              alt="Issue dashboard"
            />
          </article>
        {:else if activeTab === 3}
          <article class="panel" in:fade>
            <p>
              Classify issues effortlessly based on their source, ensuring a
              targeted approach to resolution. Prototype hiccups, test lab
              glitches, equipment malfunctions – Titan sees them all.
            </p>
            <img
              src="https://static.wixstatic.com/media/454d4b_34c7006545d1409b839bfb584001cfcd~mv2.png"
              alt="Categorize Issues"
            />
          </article>
        {:else if activeTab === 4}
          <article class="panel" in:fade>
            <p>
              Assign issue to the appropriate individual to judge and assess
              whether it is an incident or concern. Add watchers to incidents so
              email notifications for important updates are automatically sent
              to users, like being assigned a new incident or when status
              changes for an incident.
            </p>
            <img
              src="https://static.wixstatic.com/media/454d4b_4d66868a04d84cc796b04397a37a3089~mv2.png"
              alt="Stay informed"
            />
          </article>
        {:else if activeTab === 5}
          <article class="panel" in:fade>
            <p>
              Go beyond surface-level problems. Titan's root cause analysis
              dives deep, allowing you to capture the essence of issues. Craft
              effective countermeasures to fortify your processes against future
              challenges.
            </p>
            <img
              src="https://static.wixstatic.com/media/454d4b_c82b92e53f5b4df1a5e96334ccdba136~mv2.png"
              alt="Capture Root Cause and Add Countermeasures"
            />
          </article>
        {:else if activeTab === 6}
          <article class="panel" in:fade>
            <p>
              Prioritize tasks seamlessly. From critical issues demanding
              immediate attention to low-priority concerns, Titan ensures that
              your team's efforts are strategically aligned with project goals.
            </p>
            <img
              src="https://static.wixstatic.com/media/454d4b_3c23c24dc3ac43b48aeb29a5bda621e7~mv2.png"
              alt="Prioritize Issues"
            />
          </article>
        {:else if activeTab === 7}
          <article class="panel" in:fade>
            <p>
              Forge connections effortlessly. Link issues to relevant test
              requests, work orders, and equipment. This ensures no duplications
              occur by linking multiple similar or identical incidents together
              and keep the context in one place.
            </p>
            <img
              src="https://static.wixstatic.com/media/454d4b_9e5255cd0ecc4c0d9c0a87da24607c32~mv2.png"
              alt="Link Issues"
            />
          </article>
        {:else if activeTab === 8}
          <article class="panel" in:fade>
            <p>
              Capture time investments with precision. The User Time Log in
              Titan provides a visual and quantitative understanding of the
              resources invested in issue resolution, fostering efficiency.
            </p>
            <img
              src="https://static.wixstatic.com/media/454d4b_94080f50a15544fbb42f762e13084019~mv2.png"
              alt="User Time Log"
            />
          </article>
        {:else if activeTab === 9}
          <article class="panel" in:fade>
            <p>
              Analyze trends and performance. Titan's Issue Statistics feature
              provides insightful data on issue creation, closure, and open
              issues, empowering your teams with data-driven insights for
              strategic decision-making.
            </p>
            <img
              src="https://static.wixstatic.com/media/454d4b_8417fed590f04b0f9eb098c5fadd83c1~mv2.png"
              alt="Issue Statistics"
            />
          </article>
        {:else if activeTab === 10}
          <article class="panel" in:fade>
            <p>More features include</p>
            <img
              src="https://static.wixstatic.com/media/b8fe2a_18096b6ad804432ba47aeb5ef21b94c7~mv2.png"
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
