
const testScheduleManagementData = [
    {
        title: 'Resources Availability Status',
        description: 'Explore the calendar view to track the schedule of resources, encompassing their current status, upcoming assignments, and their availability.',
        image: 'https://static.wixstatic.com/media/454d4b_818cb260ad9244f3b17c54b4b07d8fc1~mv2.png',
    },
    {
        title: 'Resource Assignment',
        description: 'TITAN offers insights into resource availability, the capability to swap resources, and visibility into busy resources. You can also add or modify resources as needed for any event.',
        image: 'https://static.wixstatic.com/media/454d4b_5569a751ec7b4ff68f7dae8d544f72fc~mv2.png',
    },
    {
        title: 'Conflict Resolution',
        description: 'Proactively be notified of conflicts and receive alternatives to resolve them with TITAN\'s intuitive conflict resolution feature.',
        image: 'https://static.wixstatic.com/media/454d4b_b2634fd3f9c04073980d3dee7133f12d~mv2.png',
    },
    {
        title: 'Schedule & reschedule',
        description: 'Efficiently schedule and approve events on the calendar with TITAN. Effortlessly adjust schedules as required.',
        image: 'https://static.wixstatic.com/media/454d4b_89cd6ceb55b04069b94496d80c9db79b~mv2.png',
    },
    {
        title: 'Add and Remove Days from a Test',
        description: 'Adapt test schedules on-the-fly to accommodate unexpected changes.',
        image: 'https://static.wixstatic.com/media/454d4b_18371fb59229455785a12d10379fab5d~mv2.png',
    },
    {
        title: 'Drag and Drop​',
        description: 'Have complete control in adjusting schedules across resources through easy drag-and-drop functionality. TITAN will proactively notify all stakeholders of any changes to the event.',
        image: 'https://static.wixstatic.com/media/454d4b_58b9e051160041f5aa9934d54683c4f7~mv2.png',
    },
    {
        title: 'Real-Time Notifications​',
        description: 'Get notified instantly regarding assignments with scheduled event details.',
        image: 'https://static.wixstatic.com/media/454d4b_80ef2002e5a74624bfd9399d37f57496~mv2.png',
    },
    {
        title: 'Team Workload​',
        description: 'Observe team’s workload on calendar. Gain insights using dashboards, facilitating efficient planning.​',
        image: 'https://static.wixstatic.com/media/454d4b_4ad7ee251b714075878c232e29978a4e~mv2.png',
    },
    {
        title: 'View Upcoming Work Orders​',
        description: 'Monitor upcoming work orders, including maintenance and calibration tasks, on the calendar to ensure the optimal health of assets.​',
        image: 'https://static.wixstatic.com/media/454d4b_ca6b8c047ed74440aa314f3826542db3~mv2.png',
    },
    {
        title: 'Personalize Calendar​',
        description: 'Tailor the calendar duration to your preference. Utilize filters to streamline information and concentrate on events and assets that are significant to you.​',
        image: 'https://static.wixstatic.com/media/454d4b_1e15d91e2def4969a53d19da45985a97~mv2.png',
    },
    {
        title: 'Reports​',
        description: 'Gain insights into utilization and efficiency through in-built comprehensive reports, aiding in your optimization and forecasting plans.​',
        image: 'https://static.wixstatic.com/media/454d4b_14eae3cc185f430ebf6f3b6fc0a36385~mv2.png',
    },
];

const testFacilityManagementData = [
    {
        title: 'Schedule of Test Labs',
        description: 'Access a consolidated view of all scheduled events on the test facilities. Effortlessly observe the details of each reservation and reserve labs for events, including test requests.',
        image: 'https://static.wixstatic.com/media/454d4b_047eed2219aa48d3ac9d4fba777bef35~mv2.png',
    },
    {
        title: 'Add or Modify Test Lab',
        description: 'Create test labs and adjust your lab settings to accommodate evolving requirements. Manage supplier information, including their contact details, for seamless coordination.',
        image: 'https://static.wixstatic.com/media/454d4b_2fe7c38b412e4f908227f50809a3e8da~mv2.png',
    },
    {
        title: 'Schedule Maintenance & Calibration',
        description: 'Sync schedules seamlessly, from recurring calibrations for precision to timely maintenance alerts, ensuring your lab operates at peak reliability and performance.',
        image: 'https://static.wixstatic.com/media/454d4b_2873971af3ff436199584bee57918492~mv2.png',
    },
    {
        title: 'Configure Lab Timings',
        description: 'Define operational hours for your lab, streamlining test execution according to your preferred timings and maximize resource efficiency by aligning facility hours with your needs.',
        image: 'https://static.wixstatic.com/media/454d4b_cc6ed2f42bf149aba67a7d322abfa288~mv2.png',
    },
    {
        title: 'Define Roles and Assign Users',
        description: 'Include users for defined roles to streamline responsibilities. Efficiently delegate tasks for a well-oiled testing process.',
        image: 'https://static.wixstatic.com/media/454d4b_a3dcbcda344c46098cf8d9ceed1c094a~mv2.png',
    },
    {
        title: 'Configure Capacity & Capabilities',
        description: 'Limit the concurrent tests in each lab to avoid conflicts and maintain peak capacity. Map tests to specific labs for streamlined planning and efficient resource usage.',
        image: 'https://static.wixstatic.com/media/454d4b_1ccfb3a3cc9e490eae5a27871851aae4~mv2.png',
    },
    {
        title: 'Maintenance and Calibration Records',
        description: 'Access comprehensive records for maintenance and calibration tasks, keeping a complete history. Easily track records for audits and quality assurance.',
        image: 'https://static.wixstatic.com/media/454d4b_cdb8c622c4be4bacbf3bb96ac97f09ce~mv2.png',
    },
    {
        title: 'Conflict Notification',
        description: 'Prevent overbooking with intelligent conflict detection, eliminating double-booked resources assisting in smooth operations with no unnecessary interruptions.',
        image: 'https://static.wixstatic.com/media/454d4b_79b9e21a78e14b92af80c49607e05dc5~mv2.png',
    },
    {
        title: 'Smart Permissions',
        description: 'Tailor user permissions to ensure security and data integrity and safeguard your lab’s sensitive information with precise user and multiple team access.',
        image: 'https://static.wixstatic.com/media/454d4b_d869aa76548c4adeb21d320aa3969875~mv2.png',
    },
    {
        title: 'Watch Live',
        description: 'Tune in live to monitor test executions, making critical decisions in real-time and ensure quality and efficiency as you virtually oversee testing labs.',
        image: 'https://static.wixstatic.com/media/454d4b_a0d4c61e861d4438be98ce5a470215d9~mv2.png',
    },
    {
        title: 'More Features',
        description: 'More features include',
        image: 'https://static.wixstatic.com/media/b8fe2a_c9114b3c038142c78d0a2f2ebf01a4ea~mv2.png',
    },
];


const issueMangementData = [
    {
        title: 'Create Issues from Test',
        description: 'You can create an incident from a test and skip entering all the meta data twice. Navigate through issue workflows with ease. The Progress Tracker empowers your teams to efficiently move through stages – from identifying the problem to its resolution, ensuring accountability at every step.',
        image: 'https://static.wixstatic.com/media/454d4b_2121622bbe544ff28cd800186d9401fb~mv2.png',
    },
    {
        title: 'Issue dashboard',
        description: 'You can visualize all the Test Incidents related to the team, individual team members, or to the individual or team the incidents are assigned to for resolution. Easy sort, filter and search functions to assist.',
        image: 'https://static.wixstatic.com/media/454d4b_f3cf27268e8746198601080f376c65f5~mv2.png',
    },
    {
        title: 'Categorize Issues',
        description: 'Classify issues effortlessly based on their source, ensuring a targeted approach to resolution. Prototype hiccups, test lab glitches, equipment malfunctions – Titan sees them all.',
        image: 'https://static.wixstatic.com/media/454d4b_34c7006545d1409b839bfb584001cfcd~mv2.png',
    },
    {
        title: 'Stay informed',
        description: 'Assign issue to the appropriate individual to judge and assess whether it is an incident or concern. Add watchers to incidents so email notifications for important updates are automatically sent to users, like being assigned a new incident or when status changes for an incident.',
        image: 'https://static.wixstatic.com/media/454d4b_4d66868a04d84cc796b04397a37a3089~mv2.png',
    },
    {
        title: 'Capture Root Cause and Add Countermeasures',
        description: 'Go beyond surface-level problems. Titan\'s root cause analysis dives deep, allowing you to capture the essence of issues. Craft effective countermeasures to fortify your processes against future challenges.',
        image: 'https://static.wixstatic.com/media/454d4b_c82b92e53f5b4df1a5e96334ccdba136~mv2.png',
    },
    {
        title: 'Prioritize Issues',
        description: 'Prioritize tasks seamlessly. From critical issues demanding immediate attention to low-priority concerns, Titan ensures that your team\'s efforts are strategically aligned with project goals.',
        image: 'https://static.wixstatic.com/media/454d4b_3c23c24dc3ac43b48aeb29a5bda621e7~mv2.png',
    },
    {
        title: 'Link Issues',
        description: 'Forge connections effortlessly. Link issues to relevant test requests, work orders, and equipment. This ensures no duplications occur by linking multiple similar or identical incidents together and keep the context in one place.',
        image: 'https://static.wixstatic.com/media/454d4b_9e5255cd0ecc4c0d9c0a87da24607c32~mv2.png',
    },
    {
        title: 'User Time Log',
        description: 'Capture time investments with precision. The User Time Log in Titan provides a visual and quantitative understanding of the resources invested in issue resolution, fostering efficiency.',
        image: 'https://static.wixstatic.com/media/454d4b_94080f50a15544fbb42f762e13084019~mv2.png',
    },
    {
        title: 'Issue Statistics',
        description: 'Analyze trends and performance. Titan\'s Issue Statistics feature provides insightful data on issue creation, closure, and open issues, empowering your teams with data-driven insights for strategic decision-making.',
        image: 'https://static.wixstatic.com/media/454d4b_8417fed590f04b0f9eb098c5fadd83c1~mv2.png',
    },
    {
        title: 'More Features',
        description: 'More features include',
        image: 'https://static.wixstatic.com/media/b8fe2a_18096b6ad804432ba47aeb5ef21b94c7~mv2.png',
    },
];

const equipmentManagementData = [
    {
        title: 'Equipment Availability',
        description: 'You can effortlessly check the real-time availability status of equipment, ensuring smooth and efficient equipment management',
        image: 'https://static.wixstatic.com/media/454d4b_c5bda5960cdd41d1a8d0303e80b5ce70~mv2.png',
    },
    {
        title: 'Effortless Equipment Tracking',
        description: 'When checking out/checking in an equipment, record the equipment\'s location through a simple check-in and checkout procedure, ensuring nothing gets misplaced.',
        image: 'https://static.wixstatic.com/media/b8fe2a_e8f5e4ac47494febbd0f396c2b906a83~mv2.png',
    },
    {
        title: 'Equipment Reservation Calendar',
        description: 'Schedule and reserve equipment in a shared calendar for organized allocation and planning. You can schedule it for test requests/events',
        image: 'https://static.wixstatic.com/media/454d4b_66eda8b1a25e46d9bee1622d73a6f0bd~mv2.png',
    },
    {
        title: 'Work Order Scheduling',
        description: 'Plan ad hoc maintenance or calibration schedules in advance and receive timely notifications, preventing unexpected breakdowns and reducing downtime.',
        image: 'https://static.wixstatic.com/media/b8fe2a_0fb5f4c16d6b4677ae3030308aa880d3~mv2.png',
    },
    {
        title: 'Preventive Maintenance Logs',
        description: 'Reminder for the upcoming calibration events and keeping all records of calibration/maintenance activities.',
        image: 'https://static.wixstatic.com/media/454d4b_e389328ab4654687847ef5ba64e4e3b1~mv2.png',
    },
    {
        title: 'Utilization Record',
        description: 'Easily assists Overall Equipment Effectiveness (OEE) and track usage records, empowering you to optimize and forecast your asset performance.',
        image: 'https://static.wixstatic.com/media/454d4b_7e85dafae2004557b0a4ba159035b9a6~mv2.png',
    },
    {
        title: 'Equipment Details Management',
        description: 'Centralize and update equipment data, including name, type, specs, purchase details, manufacturer, supplier, and warranty information for efficient management.',
        image: 'https://static.wixstatic.com/media/454d4b_6890023ebab84434bbb287d426bb8c6e~mv2.png',
    },
    {
        title: 'Clone And Archive Equipment',
        description: 'Effortlessly duplicate equipment profiles, simplify additions, and streamline retirement with preserved records and archives for efficient lifecycle management.',
        image: 'https://static.wixstatic.com/media/454d4b_784158ea37b84b37b16b81fe5dcc710a~mv2.png',
    },
    {
        title: 'Overdue checked-Out Equipment',
        description: 'Receive alerts for overdue equipment checkouts, ensuring equipment is returned on time and avoiding unnecessary delays.',
        image: 'https://static.wixstatic.com/media/454d4b_9e1a320933fc4c498aecfe79fbaa6d17~mv2.png',
    },
    {
        title: 'Barcode Printing For Identification',
        description: 'Generate unique barcodes for each piece of equipment, simplifying identification and tracking of warranty, calibration, and other essential details.',
        image: 'https://static.wixstatic.com/media/454d4b_4e5677fce5484cbcb5870884e351e219~mv2.png',
    },
    {
        title: 'More Features',
        description: 'More Features include',
        image: 'https://static.wixstatic.com/media/b8fe2a_c9114b3c038142c78d0a2f2ebf01a4ea~mv2.png',
    },
 ];

 const equipmentManagementDataJA= [
    {
        "title": "リアルタイム機器管理",
        "description": "機器の利用状況をリアルタイムで確認することで、スムーズで効率的な機器管理を可能にします。",
        "image": "https://static.wixstatic.com/media/454d4b_c5bda5960cdd41d1a8d0303e80b5ce70~mv2.png"
    },
    {
        "title": "容易な機器トラッキング",
        "description": "シンプルな手順でチェックインおよびチェックアウト時に機器の位置を記録し、紛失を防ぎます。",
        "image": "https://static.wixstatic.com/media/b8fe2a_e8f5e4ac47494febbd0f396c2b906a83~mv2.png"
    },
    {
        "title": "機器スケジュールカレンダー",
        "description": "共有カレンダーで機器の予約・割り当てを行う事で、整然としたスケジュール管理を実現します。またカレンダーからテスト依頼、イベントに機器を直接割当てることが可能です。",
        "image": "https://static.wixstatic.com/media/454d4b_66eda8b1a25e46d9bee1622d73a6f0bd~mv2.png"
    },
    {
        "title": "作業依頼/定期スケジュール設定",
        "description": "作業/定期メンテナンス/キャリブレーション予定を設定し事前に通知を受け取ることで、予期せぬ故障を防ぎ不要なダウンタイムを削減します。",
        "image": "https://static.wixstatic.com/media/b8fe2a_0fb5f4c16d6b4677ae3030308aa880d3~mv2.png"
    },
    {
        "title": "保守メンテナンス/キャリブレーション履歴",
        "description": "メンテナンス/キャリブレーション/保守活動のすべての作業内容履歴を保存し、次回メンテナンス/キャリブレーションのリマインダー通知を送信します。",
        "image": "https://static.wixstatic.com/media/454d4b_e389328ab4654687847ef5ba64e4e3b1~mv2.png"
    },
    {
        "title": "設備総合効率(OEE)向上を簡潔にサポート",
        "description": "使用記録を追跡して資産のパフォーマンスを最適化し、予測することで設備総合効率（OEE）向上をサポートします。",
        "image": "https://static.wixstatic.com/media/454d4b_7e85dafae2004557b0a4ba159035b9a6~mv2.png"
    },
    {
        "title": "プロファイル管理",
        "description": "機器タイプ、仕様、購入詳細、メーカー、サプライヤー、および保証情報など、機器プロファイル情報を一元化し、更新及び管理を効率化します。",
        "image": "https://static.wixstatic.com/media/454d4b_6890023ebab84434bbb287d426bb8c6e~mv2.png"
    },
    {
        "title": "アーカイブ管理",
        "description": "機器プロファイルを複製して簡単に在庫を追加、また廃棄の際は使用履歴、作業内容履歴を含めアーカイブ化し、効率的にライフサイクル管理をします。",
        "image": "https://static.wixstatic.com/media/454d4b_784158ea37b84b37b16b81fe5dcc710a~mv2.png"
    },
    {
        "title": "期限切れの未返却機器",
        "description": "期限切れの機器のチェックアウトに関するアラートを受信し、機器が適切な時期に返却され、不要な遅延を回避します。",
        "image": "https://static.wixstatic.com/media/454d4b_9e1a320933fc4c498aecfe79fbaa6d17~mv2.png"
    },
    {
        "title": "識別用バーコード割当機能",
        "description": "各機器毎に異なるバーコードを生成/割り当てることで識別化し、キャリブレーション情報や保証期間等のトラッキングを簡略化します。",
        "image": "https://static.wixstatic.com/media/454d4b_4e5677fce5484cbcb5870884e351e219~mv2.png"
    },
    {
        "title": "その他の機能",
        "description": "その他の機能には",
        "image": "https://static.wixstatic.com/media/b8fe2a_c9114b3c038142c78d0a2f2ebf01a4ea~mv2.png"
    }
]

const issueMangementDataJA = [
    {
        "title": "テスト依頼から問題報告を作成",
        "description": "テスト依頼から問題を報告することで、メタデータを二重に入力する手間を省きます。また問題の検索が容易になります。さらに進捗追跡で、問題の特定から解決までの各段階をチームで効率的に共有し、各ステップの説明責任まで確保します。",
        "image": "https://static.wixstatic.com/media/454d4b_2121622bbe544ff28cd800186d9401fb~mv2.png"
    },
    {
        "title": "懸念事項(イシュー)ダッシュボード",
        "description": "テストチーム、チームメンバー、また問題に割当てられたユーザーは関連するテスト全ての問題報告を視覚化できます。ソート、フィルター、および検索機能で簡単に問題案件へアクセスできます。",
        "image": "https://static.wixstatic.com/media/454d4b_f3cf27268e8746198601080f376c65f5~mv2.png"
    },
    {
        "title": "問題の分類",
        "description": "問題をソースに基づいて効果的に分類し、的を絞った解決へのアプローチを促します。更にプロトタイプのトラブル、テスト施設のグリッチ、機器の故障までTitanはすべて見渡します。",
        "image": "https://static.wixstatic.com/media/454d4b_34c7006545d1409b839bfb584001cfcd~mv2.png"
    },
    {
        "title": "最新情報の取得",
        "description": "報告された問題がインシデントか懸念事項かを、適切に割当てられたユーザーが判断および評価をします。ユーザーは問題が割り当てられた際やステータスが変更された際にメール通知を受け取ります。また報告にユーザーを観察者として追加することで、更新毎にメール通知がユーザーに自動送信されます。",
        "image": "https://static.wixstatic.com/media/454d4b_4d66868a04d84cc796b04397a37a3089~mv2.png"
    },
    {
        "title": "根本原因の把握と対策",
        "description": "Titanの原因分析ツールは問題へ深く潜り込み、本質を把握します。将来の課題に応する効果的な対策を作成します。",
        "image": "https://static.wixstatic.com/media/454d4b_c82b92e53f5b4df1a5e96334ccdba136~mv2.png"
    },
    {
        "title": "問題の優先順位付け",
        "description": "タスクをシームレスに優先順位付けします。即座に注意を要する重大な問題から優先度が低い懸念まで、Titanはチームの取り組みがプロジェクト目標と戦略的に一致することを確実にします。",
        "image": "https://static.wixstatic.com/media/454d4b_3c23c24dc3ac43b48aeb29a5bda621e7~mv2.png"
    },
    {
        "title": "問題の関連ずけ",
        "description": "問題に関連するテスト依頼、作業依頼、および機器に紐づけしますします。これにより、複数の類似または同一インシデントがリンクされ、重複することなくコンテキストを一元化できます。",
        "image": "https://static.wixstatic.com/media/454d4b_9e5255cd0ecc4c0d9c0a87da24607c32~mv2.png"
    },
    {
        "title": "ユーザータイムログ",
        "description": "正確に投資した時間を把握します。Titanのユーザータイムログは、問題解決に費やすリソースを視覚的および数量的に掲示することで、効率を促進します。",
        "image": "https://static.wixstatic.com/media/454d4b_94080f50a15544fbb42f762e13084019~mv2.png"
    },
    {
        "title": "問題統計",
        "description": "トレンドとパフォーマンスを分析します。Titanの問題統計機能は、問題の作成から解決、未解決問題について洞察に富んだデータ提示で、データ主導による戦略的意思決定を提供します。",
        "image": "https://static.wixstatic.com/media/454d4b_8417fed590f04b0f9eb098c5fadd83c1~mv2.png"
    },
    {
        "title": "その他の機能",
        "description": "その他の機能",
        "image": "https://static.wixstatic.com/media/b8fe2a_18096b6ad804432ba47aeb5ef21b94c7~mv2.png"
    }
]

const testFacilityManagementDataJA = [
    {
        "title": "テスト施設スケジュール",
        "description": "テスト施設毎に予定されているイベントを一覧表示します。また各イベント詳細を簡単に把握することで、テスト依頼等がスムーズに割り当てられます。",
        "image": "https://static.wixstatic.com/media/454d4b_047eed2219aa48d3ac9d4fba777bef35~mv2.png"
    },
    {
        "title": "テスト施設の追加と設定編集",
        "description": "要件に沿ったテスト施設の設定はもちろん、連絡先を含むサプライヤー情報をシームレスで管理します。",
        "image": "https://static.wixstatic.com/media/454d4b_2fe7c38b412e4f908227f50809a3e8da~mv2.png"
    },
    {
        "title": "定期メンテナンス/キャリブレーションのスケジュール設定",
        "description": "定期メンテナンスのアラート、キャリブレーション実施タイミングを設定することで、テスト施設の高い信頼性とパフォーマンス維持をサポートします。",
        "image": "https://static.wixstatic.com/media/454d4b_2873971af3ff436199584bee57918492~mv2.png"
    },
    {
        "title": "テスト施設の稼働時間設定",
        "description": "テスト施設毎に稼働時間を設定、テストを希望するタイミングに応じて効率的に実施し、施設を最大限に活用します。",
        "image": "https://static.wixstatic.com/media/454d4b_cc6ed2f42bf149aba67a7d322abfa288~mv2.png"
    },
    {
        "title": "施設運営役割およびユーザーの定義",
        "description": "定義した役割にユーザーを割り当て責務を合理化します。効果的にタスクを委任し、テストプロセスをスムーズにします。",
        "image": "https://static.wixstatic.com/media/454d4b_a3dcbcda344c46098cf8d9ceed1c094a~mv2.png"
    },
    {
        "title": "稼働許容量と機能構成",
        "description": "テスト施設で同時に実施するテス数を制限する事で意図せぬ重複予約を回避し、稼働許容量を維持します。特定のテスト施設にテストを紐づけることで計画を合理化し、効率的な稼働を確保します。",
        "image": "https://static.wixstatic.com/media/454d4b_1ccfb3a3cc9e490eae5a27871851aae4~mv2.png"
    },
    {
        "title": "メンテナンスおよびキャリブレーション履歴",
        "description": "メンテナンスおよびキャリブレーションの作業内容、作業履歴を保持します。監査と品質保証のための記録を簡単に追跡します。",
        "image": "https://static.wixstatic.com/media/454d4b_cdb8c622c4be4bacbf3bb96ac97f09ce~mv2.png"
    },
    {
        "title": "コンフリクト通知",
        "description": "多重予約を自動検出し意図せぬ重複予約を防ぐことで、不要な中断なしにスムーズなオペレーションをサポートします。",
        "image": "https://static.wixstatic.com/media/454d4b_79b9e21a78e14b92af80c49607e05dc5~mv2.png"
    },
    {
        "title": "ユーザーアクセス権限の設定",
        "description": "セキュリティーとデータの整合性を確保し、正確なユーザーとチームのアクセスを管理します。またテスト施設の機密情報を保護するためにユーザーの権限が調整できます。",
        "image": "https://static.wixstatic.com/media/454d4b_d869aa76548c4adeb21d320aa3969875~mv2.png"
    },
    {
        "title": "ライブストリーミング",
        "description": "テストの実施状況をモニターすることで、リアルタイムで重要な決定を下せます。また遠隔から品質と効率を監視確保します。",
        "image": "https://static.wixstatic.com/media/454d4b_a0d4c61e861d4438be98ce5a470215d9~mv2.png"
    },
    {
        "title": "その他の機能",
        "description": "その他の機能は、以下を含みます。",
        "image": "https://static.wixstatic.com/media/b8fe2a_c9114b3c038142c78d0a2f2ebf01a4ea~mv2.png"
    }
]

const testScheduleManagementDataJA = [
    {
        "title": "リソースの利用状況",
        "description": "カレンダー表示により、リソースの割振り状況、最新の使用ステータス、また今後のスケジュールを包括して得られます。.",
        "image": "https://static.wixstatic.com/media/454d4b_818cb260ad9244f3b17c54b4b07d8fc1~mv2.png"
    },
    {
        "title": "リソースの割振り",
        "description": "TITANではリソースの可用性表示、変更機能、重複スケジュールの可視化を提供します。ユーザーは簡単にイベントにリソースを追加、編集することが出来ます。",
        "image": "https://static.wixstatic.com/media/454d4b_5569a751ec7b4ff68f7dae8d544f72fc~mv2.png"
    },
    {
        "title": "重複アラート機能",
        "description": "希望するリソースが同時期に予約済みまたは使用中である場合、選択時に予め重複アラートを表示し、ユーザーに注意を促します。",
        "image": "https://static.wixstatic.com/media/454d4b_b2634fd3f9c04073980d3dee7133f12d~mv2.png"
    },
    {
        "title": "スケジュール",
        "description": "TITANのカレンダー上でイベントを効率的にスケジュールを確定、承認し、必要に応じてその場で調整可能です。",
        "image": "https://static.wixstatic.com/media/454d4b_89cd6ceb55b04069b94496d80c9db79b~mv2.png"
    },
    {
        "title": "テスト依頼からの日程調整",
        "description": "予期せぬ変更でも依頼ページからスケジュールを調整して対応します。",
        "image": "https://static.wixstatic.com/media/454d4b_18371fb59229455785a12d10379fab5d~mv2.png"
    },
    {
        "title": "ドラッグ&ドロップ機能​",
        "description": "簡単なドラッグ&ドロップ機能で、リソース全体のスケジュール調整が可能です。また変更通知も全ステークホルダーへ自動送信されます。",
        "image": "https://static.wixstatic.com/media/454d4b_58b9e051160041f5aa9934d54683c4f7~mv2.png"
    },
    {
        "title": "リアルタイム通知​",
        "description": "割り当てられたイベントに関する通知を即座に受信します。",
        "image": "https://static.wixstatic.com/media/454d4b_80ef2002e5a74624bfd9399d37f57496~mv2.png"
    },
    {
        "title": "作業量の可視化​",
        "description": "カレンダー上でチームの作業量を可視化することで、効率的な計画を促進します。",
        "image": "https://static.wixstatic.com/media/454d4b_4ad7ee251b714075878c232e29978a4e~mv2.png"
    },
    {
        "title": "メンテナンス等作業日程を表示​",
        "description": "メンテナンスやキャリブレーション作業を含む作業日程をカレンダーで監視し、資産の最適な状態を確保します。​",
        "image": "https://static.wixstatic.com/media/454d4b_ca6b8c047ed74440aa314f3826542db3~mv2.png"
    },
    {
        "title": "カレンダーの最適化​",
        "description": "カレンダーの表示期間をユーザー個人の好みに合わせて設定できます。またフィルターを最適化することで、ユーザーに必要な情報を合理化し、重要なイベントやリソースに集中できます。",
        "image": "https://static.wixstatic.com/media/454d4b_1e15d91e2def4969a53d19da45985a97~mv2.png"
    },
    {
        "title": "レポート​",
        "description": "実装されているレポート機能を使い、施設使用率と効率性を把握することで、テスト計画の最適化と予測を支援します。​",
        "image": "https://static.wixstatic.com/media/454d4b_14eae3cc185f430ebf6f3b6fc0a36385~mv2.png"
    }
]




const data = testScheduleManagementData;

export default data;