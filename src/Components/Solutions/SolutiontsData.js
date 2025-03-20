const solutionsData = [
    {
      id: 'counter',
      end: 64000,
      icon: '1309-load-balancer-outline.gif',
      title: 'Alpha Storage Services',
      description: [
        'Offers various storage services for the Alpha Compute Instances, like Block, Object Store and File services, in a massively scalable model.',
        'Performance workloads, throughput-based workloads, file services and Object storage (both S3 and Swift) requirements.'
      ],
      learnMoreLink: 'http://localhost:3000/learn#ACS',
      counters: [
        { id: 'counter', label: 'stb2', subLabel: 'Max.IOPS' },
        { id: 'counter1', label: 'stb2', subLabel: 'Max.IOPS' },
        { id: 'counter2', label: 'Arbour', subLabel: 'Max.IOPS' }
      ]
    },
    {
      id: 'counter3',
      end: 2000,
      icon: '57-server-outline (1).gif',
      title: 'Alpha Compute Services',
      description: [
        'ECP Cloud offers predefined Instance type configurations for every need from small general purpose workloads to large memory intensive workloads and high performance computing workloads.',
        'Each instance type has precise specifications, including the number of vCPUs, memory capacity, and network performance.'
      ],
      learnMoreLink: 'http://localhost:3000/learn#compute',
      counters: [
        { id: 'counter3', label: 'stb2', subLabel: 'Max.IOPS' },
        { id: 'counter4', label: 'stb2', subLabel: 'Max.IOPS' }
      ]
    },
    {
      id: 'counter5',
      end: 99,
      icon: '1335-qr-code-outline 1.gif',
      title: 'Alpha Network Services',
      description: [
        'Secure Enterprise Network & software defined, makes complex network administrations very simple on self service with just a few mouse clicks.',
        'Although it allows multitude of automations, it continues to have the zero trust security.'
      ],
      learnMoreLink: 'http://localhost:3000/learn#ACS',
      counters: [
        { id: 'counter5', label: 'Ecosystem', subLabel: 'Operating' }
      ]
    }
  ];
  
  export default solutionsData;
  