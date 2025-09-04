'use client'

import { useState } from 'react'
import { Phone, MessageSquare, AlertTriangle, PhoneCall, ChevronRight, ChevronDown } from 'lucide-react'

export default function ScriptDisplay() {
  const [expandedSections, setExpandedSections] = useState<string[]>(['inbound'])

  const toggleSection = (section: string) => {
    setExpandedSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    )
  }

  const scriptSections = [
    {
      id: 'inbound',
      title: '📞 Inbound Call Agent Script',
      icon: <Phone className="w-5 h-5" />,
      color: 'bg-blue-500',
      sections: [
        {
          title: 'Greeting & Rapport Building',
          content: `Hi, thanks for calling! This is [Agent Name] with ProShield Services on a recorded line — how can I help with your Roofing and home project needs?`
        },
        {
          title: 'Customer Discovery',
          content: `Thanks for calling, let me quickly explain how this works. Proshield.Services partners with Thumbtack and thousands of licensed contractors nationwide. We'll match your project with local pros who can send you a free, no-obligation estimate. To get started, I'll just need your zip code to confirm we have contractors in your area, and the best email so contractors can send your estimate.

Does that sound good?

Great!

What do you need done today?

And what zip code is the house located in?`,
          action: `Agent Action: Go to https://www.proshield.services/ and make sure there is a contractor in that area.
If yes, continue.
If no, say "I'm so sorry, it looks like we don't have any contractors in your area for that type of job right now. I really appreciate you taking the time with me today. Please check back with us in the future as we're always adding new professionals."`
        },
        {
          title: 'Matching Contractors',
          content: `I'm going to match you with a few trusted local contractors in your area. All of them are backed by Thumbtack's Happiness Guarantee, which means you're covered if anything doesn't go as expected — it's just an extra layer of protection for your peace of mind.`
        }
      ]
    },
    {
      id: 'compliance',
      title: '📜 Compliance (Thumbtack Terms)',
      icon: <AlertTriangle className="w-5 h-5" />,
      color: 'bg-yellow-500',
      sections: [
        {
          title: 'Terms and Conditions',
          content: `I have sent you the Thumbtack Terms, Conditions, and Disclosures to the email you provided. You can also view them online at thumbtack.com/terms/ and thumbtack.com/privacy/. It is important to review those just like you would with any company you work with.`
        }
      ]
    },
    {
      id: 'quote',
      title: '🏗️ Building the Quote Request',
      icon: <MessageSquare className="w-5 h-5" />,
      color: 'bg-green-500',
      sections: [
        {
          title: 'Confirm Project Type',
          content: `Great. So let's talk about the job you need done.`,
          action: `Agent Action: Give the customer details about the top contractor. Name, number of jobs, number of stars and reviews, years in business.

Does that sound like a good option to you?

If yes: Great! To get the contractor all the information they need to give you a quote, I am going to ask you some questions.`
        },
        {
          title: 'Quote Collection Process',
          content: `Ok [Customer Name], I think I have everything I need. I have submitted it to the contractor. With your permission, I would like to submit this quote on your behalf to two more contractors.

We like to submit to three contractors because:`,
          benefits: [
            '🛠️ More Bids = Better Options: By getting multiple bids, you can compare prices, timelines, and services—so you\'re not stuck with just one option.',
            '💰 You Save Money: When contractors compete for your business, you\'re more likely to get a fair price—or even a better deal.',
            '⏱️ You Save Time: Instead of calling around, we\'ll do the work. You just sit back and review the bids.',
            '🔒 No Pressure, No Obligation: You\'re not locked into anything. If you don\'t like any of the bids, you can walk away—no cost, no commitment.',
            '📍 Local, Verified Pros Only: We only send your request to trusted, local contractors who are ready to take on the job.'
          ]
        },
        {
          title: 'Closing',
          content: `Finally, I am going to tell you exactly who I am submitting your request to and what their rating is from past jobs at Thumbtack.

Can I go ahead and submit your details?

Great, I am submitting that now.

You should get an email from contractors about your job. You can work with them via email, phone and text. Just keep an eye out in your Spam, and Inbox folder. Most will respond within 24 hours! You can always call us back if you need to as well!

That's it! Good luck with your project!`
        }
      ]
    },
    {
      id: 'objections',
      title: '✅ Common Objections & Rebuttals',
      icon: <AlertTriangle className="w-5 h-5" />,
      color: 'bg-red-500',
      objections: [
        {
          objection: 'Who is Thumbtack?',
          rebuttal: `ProShield.Services is an exclusive partner of Thumbtack, the trusted platform that connects homeowners with top-rated local pros. We make it easy to get your home project done by matching you with a qualified contractor in your area, backed by Thumbtack's Happiness Guarantee for peace of mind.

Thumbtack is a trusted platform that connects homeowners with top-rated local professionals for any home project, from repairs to remodels. It makes it easy to find and hire reliable contractors, and every project is backed by Thumbtack's Happiness Guarantee for peace of mind.`
        },
        {
          objection: 'I don\'t want to give my zip code.',
          rebuttals: [
            {
              title: 'Rebuttal 1 – The Purpose',
              content: 'I totally understand your concern. We don\'t need your exact address — just your ZIP code so we can match you with local, licensed contractors in your area. The contractors will reach out to discuss your project, but they don\'t receive your address unless you choose to give it to them.'
            },
            {
              title: 'Rebuttal 2 – Privacy Focus',
              content: 'We respect your privacy and never share your full info. The ZIP just helps us find nearby professionals. Contractors won\'t see your address unless you provide it directly.'
            },
            {
              title: 'Rebuttal 3 – Offer Flexibility',
              content: 'If you\'re uncomfortable with your own ZIP, feel free to give one nearby — we just need a general area to get accurate quotes. Your address stays private until you\'re ready to share it.'
            }
          ]
        },
        {
          objection: 'How many people are going to call me?',
          rebuttal: 'You\'ll be contacted by the companies that we connect you with today — we don\'t send your info out to a bunch of companies, just the ones that are the best fit.'
        },
        {
          objection: 'I don\'t want to be spammed.',
          rebuttal: 'Totally fair — we value your privacy and only share your info with licensed professionals who are ready to give you a custom quote.'
        },
        {
          objection: 'Why do I have to agree to Thumbtack\'s terms?',
          rebuttal: 'Great question — since we\'re submitting your project through Thumbtack\'s system to match you with contractors, they require your consent before we can do that. It\'s just to protect your rights and make sure everything is transparent.'
        },
        {
          objection: 'Is this legit? How do I know these contractors are trustworthy?',
          rebuttal: 'That\'s a fair question! The great thing is that all the contractors we match you with are part of Thumbtack\'s network, and their work is backed by Thumbtack\'s Happiness Guarantee. So if something goes wrong, you have a way to get support or even a refund — it\'s not just random people we\'re connecting you with.'
        },
        {
          objection: 'I\'m nervous about working with someone I don\'t know.',
          rebuttal: 'That makes total sense — your home\'s a big deal. That\'s why every pro we refer through Thumbtack is backed by their Happiness Guarantee. If something doesn\'t go right, Thumbtack will work with you to make it right or refund up to the full amount you paid.'
        }
      ]
    },
    {
      id: 'outbound',
      title: '📞 Outbound Script for Incomplete Leads',
      icon: <PhoneCall className="w-5 h-5" />,
      color: 'bg-purple-500',
      sections: [
        {
          title: 'Initial Call',
          content: `Hi, this is [Agent Name] with ProShield Services. I noticed you started a request for your [project type] but didn't finish submitting. I just wanted to help you complete it so we can get your quotes from local pros — all backed by Thumbtack's Happiness Guarantee, so you're protected from start to finish.`
        },
        {
          title: 'Continue Discovery',
          content: `Do you have a few minutes now to tell me a bit more about the project? We'll just need the zip code and a brief description.`
        },
        {
          title: 'Reconfirm Consent',
          content: `And just like before, we'll need your verbal agreement to Thumbtack's Terms of Use and Privacy Policy — can I resend that link now?`
        }
      ]
    }
  ]

  return (
    <div className="p-8 space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-apo-text-dark mb-4">Agent Scripts</h2>
        <p className="text-lg text-apo-text-medium leading-relaxed max-w-3xl mx-auto">
          Streamlined call center scripts organized by call type and situation. Click on each section to expand and view detailed scripts.
        </p>
      </div>

      {scriptSections.map((section) => (
        <div key={section.id} className="bg-apo-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
          <button
            onClick={() => toggleSection(section.id)}
            className={`w-full p-8 text-left flex items-center justify-between hover:bg-purple-50 transition-all`}
          >
            <div className="flex items-center space-x-6">
              <div className={`p-4 ${section.color} text-white rounded-xl shadow-md`}>
                {section.icon}
              </div>
              <h3 className="text-2xl font-bold text-apo-text-dark">{section.title}</h3>
            </div>
            {expandedSections.includes(section.id) ? (
              <ChevronDown className="w-6 h-6 text-apo-text-medium" />
            ) : (
              <ChevronRight className="w-6 h-6 text-apo-text-medium" />
            )}
          </button>

          {expandedSections.includes(section.id) && (
            <div className="px-8 pb-8 space-y-8">
              {section.sections && section.sections.map((subsection, index) => (
                <div key={index} className="border-l-4 border-apo-cyan pl-8 py-4">
                  <h4 className="text-xl font-bold text-apo-text-dark mb-4">{subsection.title}</h4>
                  <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-xl mb-4 border border-gray-100">
                    <p className="text-apo-text-dark whitespace-pre-line leading-relaxed text-lg">{subsection.content}</p>
                  </div>
                  {subsection.action && (
                    <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-2 border-yellow-200 p-6 rounded-xl">
                      <p className="font-bold text-yellow-800 mb-3 text-lg">🎯 Agent Action:</p>
                      <p className="text-yellow-700 whitespace-pre-line leading-relaxed">{subsection.action}</p>
                    </div>
                  )}
                  {subsection.benefits && (
                    <div className="space-y-3 mt-4">
                      <p className="font-bold text-apo-text-dark mb-4 text-lg">💡 Benefits to mention (pick 1-2):</p>
                      {subsection.benefits.map((benefit, i) => (
                        <div key={i} className="bg-gradient-to-r from-apo-cyan to-blue-400 border-l-4 border-apo-purple p-4 text-white rounded-lg shadow-md">
                          {benefit}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {section.objections && (
                <div className="space-y-6">
                  {section.objections.map((objection, index) => (
                    <div key={index} className="bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200 rounded-xl p-6 shadow-lg">
                      <h4 className="text-xl font-bold text-red-800 mb-4">💬 "{objection.objection}"</h4>
                      {objection.rebuttal && (
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-red-100">
                          <p className="text-apo-text-dark whitespace-pre-line leading-relaxed">{objection.rebuttal}</p>
                        </div>
                      )}
                      {objection.rebuttals && (
                        <div className="space-y-4 mt-4">
                          {objection.rebuttals.map((rebuttal, i) => (
                            <div key={i} className="bg-gradient-to-r from-red-100 to-pink-100 border-l-4 border-red-400 p-5 rounded-lg">
                              <h5 className="font-bold text-red-800 mb-3 text-lg">{rebuttal.title}</h5>
                              <p className="text-red-700 leading-relaxed">{rebuttal.content}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}