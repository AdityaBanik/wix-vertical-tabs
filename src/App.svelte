<svelte:options customElement="wix-vertical-tabs" />

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
        >Equipment Availability</TabLabel
      >

      <TabLabel bind:group={activeTab} value={2}>
        Effortless Equipment Tracking
      </TabLabel>

      <TabLabel bind:group={activeTab} value={3}>
        Equipment Reservation Calendar
      </TabLabel>

      <TabLabel bind:group={activeTab} value={4}>Work Order Scheduling</TabLabel
      >

      <TabLabel bind:group={activeTab} value={5}>
        Preventive Maintenance Logs
      </TabLabel>

      <TabLabel bind:group={activeTab} value={6}>Utilization Record</TabLabel>

      <TabLabel bind:group={activeTab} value={7}>
        Equipment Details Management
      </TabLabel>

      <TabLabel bind:group={activeTab} value={8}>
        Clone and Archive Equipment
      </TabLabel>

      <TabLabel bind:group={activeTab} value={9}>
        Overdue Checked-Out Equipment
      </TabLabel>

      <TabLabel bind:group={activeTab} value={10}>
        Barcode Printing for Identification
      </TabLabel>

      <svelte:fragment slot="panel">
        {#if activeTab === 1}
          <article class="panel" in:fade>
            <p>
              You can effortlessly check the real-time availability status of
              equipment, ensuring smooth and efficient equipment management.
            </p>
            <img
              src="https://static.wixstatic.com/media/454d4b_c5bda5960cdd41d1a8d0303e80b5ce70~mv2.png"
              alt="Equipment Availability"
            />
          </article>
        {:else if activeTab === 2}
          <article class="panel" in:fade>
            <p>
              When checking out/checking in an equipment, record the equipment's
              location through a simple check-in and checkout procedure,
              ensuring nothing gets misplaced.
            </p>
            <img
              src="https://static.wixstatic.com/media/454d4b_31d8a719e4854a4786d19a0a64379234~mv2.png"
              alt="Equipment Tracking"
            />
          </article>
        {:else if activeTab === 3}
          <article class="panel" in:fade>
            <p>
              Schedule and reserve equipment in a shared calendar for organized
              allocation and planning. You can schedule it for test
              requests/events.
            </p>
            <img
              src="https://static.wixstatic.com/media/454d4b_66eda8b1a25e46d9bee1622d73a6f0bd~mv2.png"
              alt="Equipment Reservation Calendar"
            />
          </article>
        {:else if activeTab === 4}
          <article class="panel" in:fade>
            <p>
              Plan ad hoc maintenance or calibration schedules in advance and
              receive timely notifications, preventing unexpected breakdowns and
              reducing downtime.
            </p>
            <img
              src="https://static.wixstatic.com/media/454d4b_d8076718904843b88c5a41ab9f78b39d~mv2.png"
              alt="Work Order Scheduling"
            />
          </article>
        {:else if activeTab === 5}
          <article class="panel" in:fade>
            <p>
              Reminder for the upcoming calibration events and keeping all
              records of calibration/maintenance activities.
            </p>
            <img
              src="https://static.wixstatic.com/media/454d4b_e389328ab4654687847ef5ba64e4e3b1~mv2.png"
              alt="Preventive Maintenance Logs"
            />
          </article>
        {:else if activeTab === 6}
          <article class="panel" in:fade>
            <p>
              Easily assists Overall Equipment Effectiveness (OEE) and track
              usage records, empowering you to optimize and forecast your asset
              performance.
            </p>
            <img
              src="https://static.wixstatic.com/media/454d4b_7e85dafae2004557b0a4ba159035b9a6~mv2.png"
              alt="Utilization Record"
            />
          </article>
        {:else if activeTab === 7}
          <article class="panel" in:fade>
            <p>
              Centralize and update equipment data, including name, type, specs,
              purchase details, manufacturer, supplier, and warranty information
              for efficient management.
            </p>
            <img
              src="https://static.wixstatic.com/media/454d4b_6890023ebab84434bbb287d426bb8c6e~mv2.png"
              alt="Equipment Details Management"
            />
          </article>
        {:else if activeTab === 8}
          <article class="panel" in:fade>
            <p>
              Effortlessly duplicate equipment profiles, simplify additions, and
              streamline retirement with preserved records and archives for
              efficient lifecycle management.
            </p>
            <img
              src="https://static.wixstatic.com/media/454d4b_784158ea37b84b37b16b81fe5dcc710a~mv2.png"
              alt="Clone and Archive Equipment"
            />
          </article>
        {:else if activeTab === 9}
          <article class="panel" in:fade>
            <p>
              Receive alerts for overdue equipment checkouts, ensuring equipment
              is returned on time and avoiding unnecessary delays.
            </p>
            <img
              src="https://static.wixstatic.com/media/454d4b_9e1a320933fc4c498aecfe79fbaa6d17~mv2.png"
              alt="Overdue Checked-Out Equipment"
            />
          </article>
        {:else if activeTab === 10}
          <article class="panel" in:fade>
            <p>
              Generate unique barcodes for each piece of equipment, simplifying
              identification and tracking of warranty, calibration, and other
              essential details.
            </p>
            <img
              src="https://static.wixstatic.com/media/454d4b_4e5677fce5484cbcb5870884e351e219~mv2.png"
              alt="Barcode Printing for Identification"
            />
          </article>
        {/if}
      </svelte:fragment>
    </Tabs>
  </section>

  <section class="accordian">
    <Accordian>
      <AccordianItem>
        <svelte:fragment slot="title">Equipment Availability</svelte:fragment>
        <article>
          <p>
            You can effortlessly check the real-time availability status of
            equipment, ensuring smooth and efficient equipment management.
          </p>
          <img
            src="https://static.wixstatic.com/media/454d4b_c5bda5960cdd41d1a8d0303e80b5ce70~mv2.png"
            alt="Equipment Availability"
          />
        </article>
      </AccordianItem>
      <AccordianItem>
        <svelte:fragment slot="title"
          >Effortless Equipment Tracking</svelte:fragment
        >
        <article>
          <p>
            When checking out/checking in an equipment, record the equipment's
            location through a simple check-in and checkout procedure, ensuring
            nothing gets misplaced.
          </p>
          <img
            src="https://static.wixstatic.com/media/454d4b_31d8a719e4854a4786d19a0a64379234~mv2.png"
            alt="Equipment Tracking"
          />
        </article>
      </AccordianItem>
      <AccordianItem>
        <svelte:fragment slot="title"
          >Equipment Reservation Calendar</svelte:fragment
        >
        <article>
          <p>
            Schedule and reserve equipment in a shared calendar for organized
            allocation and planning. You can schedule it for test
            requests/events.
          </p>
          <img
            src="https://static.wixstatic.com/media/454d4b_66eda8b1a25e46d9bee1622d73a6f0bd~mv2.png"
            alt="Equipment Reservation Calendar"
          />
        </article>
      </AccordianItem>
      <AccordianItem>
        <svelte:fragment slot="title">Work Order Scheduling</svelte:fragment>
        <article>
          <p>
            Plan ad hoc maintenance or calibration schedules in advance and
            receive timely notifications, preventing unexpected breakdowns and
            reducing downtime.
          </p>
          <img
            src="https://static.wixstatic.com/media/454d4b_d8076718904843b88c5a41ab9f78b39d~mv2.png"
            alt="Work Order Scheduling"
          />
        </article>
      </AccordianItem>
      <AccordianItem>
        <svelte:fragment slot="title"
          >Preventive Maintenance Logs</svelte:fragment
        >
        <article>
          <p>
            Reminder for the upcoming calibration events and keeping all records
            of calibration/maintenance activities.
          </p>
          <img
            src="https://static.wixstatic.com/media/454d4b_e389328ab4654687847ef5ba64e4e3b1~mv2.png"
            alt="Preventive Maintenance Logs"
          />
        </article>
      </AccordianItem>
      <AccordianItem>
        <svelte:fragment slot="title">Utilization Record</svelte:fragment>
        <article>
          <p>
            Easily assists Overall Equipment Effectiveness (OEE) and track usage
            records, empowering you to optimize and forecast your asset
            performance.
          </p>
          <img
            src="https://static.wixstatic.com/media/454d4b_7e85dafae2004557b0a4ba159035b9a6~mv2.png"
            alt="Utilization Record"
          />
        </article>
      </AccordianItem>
      <AccordianItem>
        <svelte:fragment slot="title"
          >Equipment Details Management</svelte:fragment
        >
        <article>
          <p>
            Centralize and update equipment data, including name, type, specs,
            purchase details, manufacturer, supplier, and warranty information
            for efficient management.
          </p>
          <img
            src="https://static.wixstatic.com/media/454d4b_6890023ebab84434bbb287d426bb8c6e~mv2.png"
            alt="Equipment Details Management"
          />
        </article>
      </AccordianItem>
      <AccordianItem>
        <svelte:fragment slot="title"
          >Clone and Archive Equipment</svelte:fragment
        >
        <article>
          <p>
            Effortlessly duplicate equipment profiles, simplify additions, and
            streamline retirement with preserved records and archives for
            efficient lifecycle management.
          </p>
          <img
            src="https://static.wixstatic.com/media/454d4b_784158ea37b84b37b16b81fe5dcc710a~mv2.png"
            alt="Clone and Archive Equipment"
          />
        </article>
      </AccordianItem>
      <AccordianItem>
        <svelte:fragment slot="title"
          >Overdue Checked-Out Equipment</svelte:fragment
        >
        <article>
          <p>
            Receive alerts for overdue equipment checkouts, ensuring equipment
            is returned on time and avoiding unnecessary delays.
          </p>
          <img
            src="https://static.wixstatic.com/media/454d4b_9e1a320933fc4c498aecfe79fbaa6d17~mv2.png"
            alt="Overdue Checked-Out Equipment"
          />
        </article>
      </AccordianItem>
      <AccordianItem>
        <svelte:fragment slot="title"
          >Barcode Printing for Identification</svelte:fragment
        >
        <article>
          <p>
            Generate unique barcodes for each piece of equipment, simplifying
            identification and tracking of warranty, calibration, and other
            essential details.
          </p>
          <img
            src="https://static.wixstatic.com/media/454d4b_4e5677fce5484cbcb5870884e351e219~mv2.png"
            alt="Barcode Printing for Identification"
          />
        </article>
      </AccordianItem>
    </Accordian>
  </section>
</div>

<style>
 @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');

  .container {
    font-family: 'Montserrat', sans-serif;
    background-color: transparent;
    margin: 0;
    display: flex;
  
    align-items: center;
    
  }
  .container * {
    box-sizing: border-box;
  }

  .container{
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
  .tabs{
    width: 100%;
  }
  p {
    text-align: center;
    color: #33333387;
  }
  img {
    width: 100%;
    height: 100%;

    object-fit: contain;
  }
@media (min-width: 1600px) {
  .container{    
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
   .container{
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
