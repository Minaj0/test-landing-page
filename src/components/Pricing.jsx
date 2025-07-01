import React from 'react'

export const Pricing = () => {
  
  const plans = [
    {
      title: 'STANDARD',
      price: '$2,150',
      frequency: '/month',
      subtitle: 'One request at a time',
      includes: [
        'Unlimited requests',
        '~48 hour delivery',
        'Unlimited brands',
        'Weekly meetings',
        'Pause or cancel anytime',
        'Managed via Slack and Trello',
        'All services except Webflow',
      ],
      highlight: false,
    },
    {
      title: 'PRO',
      price: '$3,150',
      frequency: '/month',
      subtitle: 'Double the requests',
      includes: [
        'Unlimited requests',
        '~48 hour delivery',
        'Unlimited brands',
        'Weekly meetings',
        'Pause or cancel anytime',
        'Managed via Slack and Trello',
        'All services and Webflow',
      ],
      highlight: true,
    },
    {
      title: 'PROJECT-BASED',
      subtitle: 'For a custom fee delivered in milestones. Ideal for specific goals.',
      includes: ['Fixed scope of work', 'Delivered in milestones'],
      isCustom: true,
    },
    {
      title: 'Refer & earn',
      subtitle: 'Receive $150 for each referral!',
      isReferral: true,
    },
  ];

  return (
    <div className='mt-3 md:mt-20'>
      <img
        src="/assets/pricing.svg"
        alt=""
        className='mx-auto'
      />
      <p className='text-h3 mt-3 md:text-h2 md:leading-15 font-extralight text-center'>Choose the relevant plan to build, <br /> grow and fasten your team</p>
      
      <section className="px-4 py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          {/* Grid Container */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* STANDARD */}
            <div className="bg-[#141414] rounded-2xl p-6 flex flex-col justify-between border border-[#1f1f1f]">
              <div>
                <h3 className="text-sm uppercase text-gray-400 mb-2">STANDARD</h3>
                <div className="text-3xl font-light mb-1">
                  $2,150<span className="text-lg font-normal">/month</span>
                </div>
                <p className="underline text-sm text-gray-300 mb-6">One request at a time</p>
                <p className="text-sm text-gray-400 mb-2">What’s included:</p>
                <ul className="text-sm space-y-2 mb-6">
                  {[
                    'Unlimited requests',
                    '~48 hour delivery',
                    'Unlimited brands',
                    'Weekly meetings',
                    'Pause or cancel anytime',
                    'Managed via Slack and Trello',
                    'All services except Webflow',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-yellow-400 text-lg">✔</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <img src="/assets/subscribe.svg" alt="" />
              </div>
            </div>

            {/* PRO */}
            <div className="bg-[#141414] rounded-2xl p-6 flex flex-col justify-between border border-[#1f1f1f] relative">
              <img
                src="/assets/badge.svg"
                alt=""
                className='h-10 absolute top-0 right-8'
              />
              <div>
                <h3 className="text-sm uppercase text-gray-400 mb-2">PRO</h3>
                <div className="text-3xl font-light mb-1">
                  $3,150<span className="text-lg font-normal">/month</span>
                </div>
                <p className="underline text-sm text-gray-300 mb-6">Double the requests</p>
                <p className="text-sm text-gray-400 mb-2">What’s included:</p>
                <ul className="text-sm space-y-2 mb-6">
                  {[
                    'Unlimited requests',
                    '~48 hour delivery',
                    'Unlimited brands',
                    'Weekly meetings',
                    'Pause or cancel anytime',
                    'Managed via Slack and Trello',
                    'All services and Webflow',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-yellow-400 text-lg">✔</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <img src="/assets/subscribe.svg" alt="" />
              </div>
            </div>

            {/* Right Column split into two rows */}
            <div className="flex flex-col gap-6">
              {/* PROJECT-BASED */}
              <div className="bg-[#141414] rounded-2xl p-6 flex flex-col justify-between border border-[#1f1f1f] flex-1">
                <div>
                  <h3 className="text-sm uppercase text-gray-400 mb-2">PROJECT-BASED</h3>
                  <p className="text-sm text-gray-300 mb-6">
                    For a custom fee delivered in milestones. Ideal for specific goals. Custom project scope.
                  </p>
                  <p className="text-sm text-gray-400 mb-2">What’s included:</p>
                  <ul className="text-sm space-y-2 mb-6">
                    {['Fixed scope of work', 'Delivered in milestones'].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-yellow-400 text-lg">✔</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <button className="w-full bg-transparent border border-gray-600 text-white rounded-xl py-3 text-sm hover:bg-gray-800 transition">
                    Send email
                  </button>
                </div>
              </div>

              {/* REFER & EARN */}
              <div className="bg-[#141414] rounded-2xl p-6 flex flex-col justify-between border border-[#1f1f1f] flex-1">
                <div>
                  <h3 className="text-2xl font-light mb-2">Refer & earn</h3>
                  <p className="text-sm text-gray-400 mb-6">Receive $150 for each referral!</p>
                </div>
                <div>
                  <button className="w-full bg-transparent border border-gray-600 text-white rounded-xl py-3 text-sm hover:bg-gray-800 transition">
                    Join now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
  )
}
