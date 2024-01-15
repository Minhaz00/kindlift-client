import React from 'react';
import { useLoaderData } from 'react-router-dom';
import OrgCard from './OrgCard';
import '../Events/Events.css'

const Org = () => {

    const orgs = useLoaderData()
    return (
        <div className='events w-75 mx-auto'>
            {
                orgs.map(org => <OrgCard
                    key={org.id}
                    org={org}
                ></OrgCard>)
            }
        </div>
    );
};

export default Org;



























// {
//     "id": "7",
//     "category": "Disaster Relief",
//     "name": "Red Cross",
//     "profilepic": "https://example.com/images/red_cross_logo.jpg",
//     "loc": "Global",
//     "email": "info@redcross.org",
//     "ratingsCount": 6200,
//     "coverpic": "https://example.com/images/red_cross_cover.jpg",
//     "phone": "97531",
//     "bio": "The Red Cross provides humanitarian aid and disaster relief to those in need. Our volunteers and staff work tirelessly to assist communities affected by natural disasters, conflicts, and emergencies."
//   },
//   {
//     "id": "8",
//     "category": "Child Welfare",
//     "name": "UNICEF",
//     "profilepic": "https://example.com/images/unicef_logo.jpg",
//     "loc": "Global",
//     "email": "info@unicef.org",
//     "ratingsCount": 5300,
//     "coverpic": "https://example.com/images/unicef_cover.jpg",
//     "phone": "86420",
//     "bio": "UNICEF works to ensure every child has the right to survival, education, and protection. We provide health care, nutrition, and education programs to children in need around the world."
//   },
//   {
//     "id": "9",
//     "category": "Cancer Research",
//     "name": "American Cancer Society",
//     "profilepic": "https://example.com/images/acs_logo.jpg",
//     "loc": "United States",
//     "email": "info@cancer.org",
//     "ratingsCount": 4800,
//     "coverpic": "https://example.com/images/acs_cover.jpg",
//     "phone": "15973",
//     "bio": "The American Cancer Society is dedicated to eliminating cancer as a major health problem. We fund research, provide support to patients and their families, and advocate for policies to prevent and treat cancer."
//   },
//   {
//     "id": "10",
//     "category": "Mental Health",
//     "name": "Mind",
//     "profilepic": "https://example.com/images/mind_logo.jpg",
//     "loc": "United Kingdom",
//     "email": "info@mind.org.uk",
//     "ratingsCount": 4200,
//     "coverpic": "https://example.com/images/mind_cover.jpg",
//     "phone": "35791",
//     "bio": "Mind is a mental health charity that provides support, raises awareness, and promotes understanding of mental health issues. We work to ensure that everyone experiencing a mental health problem gets the support and respect they deserve."
//   },
//   {
//     "id": "11",
//     "category": "Education",
//     "name": "Teach For All",
//     "profilepic": "https://example.com/images/teach_for_all_logo.jpg",
//     "loc": "Global",
//     "email": "info@teachforall.org",
//     "ratingsCount": 5900,
//     "coverpic": "https://example.com/images/teach_for_all_cover.jpg",
//     "phone": "80246",
//     "bio": "Teach For All is a global network of organizations that strives to ensure that all children have the opportunity to attain an excellent education. We recruit and develop promising leaders to teach in high-need schools and communities."
//   },
//   {
//     "id": "12",
//     "category": "Refugee Support",
//     "name": "International Rescue Committee",
//     "profilepic": "https://example.com/images/irc_logo.jpg",
//     "loc": "Global",
//     "email": "info@rescue.org",
//     "ratingsCount": 4700,
//     "coverpic": "https://example.com/images/irc_cover.jpg",
//     "phone": "13790",
//     "bio": "The International Rescue Committee responds to the world's worst humanitarian crises and helps people to survive and rebuild their lives. We provide support to refugees and displaced communities, offering health, education, and economic opportunities."
//   },
//   {
//     "id": "13",
//     "category": "Hunger Relief",
//     "name": "World Food Programme",
//     "profilepic": "https://example.com/images/wfp_logo.jpg",
//     "loc": "Global",
//     "email": "info@wfp.org",
//     "ratingsCount": 6900,
//     "coverpic": "https://example.com/images/wfp_cover.jpg",
//     "phone": "24689",
//     "bio": "The World Food Programme is the food assistance branch of the United Nations. We work to eliminate hunger and promote food security worldwide by delivering food aid, supporting local agriculture, and implementing sustainable solutions."
//   },
//   {
//     "id": "14",
//     "category": "Clean Water",
//     "name": "Charity: Water",
//     "profilepic": "https://example.com/images/charity_water_logo.jpg",
//     "loc": "Global",
//     "email": "info@charitywater.org",
//     "ratingsCount": 5100,
//     "coverpic": "https://example.com/images/charity_water_cover.jpg",
//     "phone": "97531",
//     "bio": "Charity: Water is a non-profit organization bringing clean and safe drinking water to people in need around the world. We fund sustainable water projects and work to ensure that every person has access to clean water."
//   },
//   {
//     "id": "15",
//     "category": "Humanitarian Aid",
//     "name": "Mercy Corps",
//     "profilepic": "https://example.com/images/mercy_corps_logo.jpg",
//     "loc": "Global",
//     "email": "info@mercycorps.org",
//     "ratingsCount": 5800,
//     "coverpic": "https://example.com/images/mercy_corps_cover.jpg",
//     "phone": "86420",
//     "bio": "Mercy Corps is a global team of humanitarians working together on the front lines of crisis to help people survive the world’s toughest challenges. We provide emergency assistance, support sustainable development, and promote social entrepreneurship."
//   },
//   {
//     "id": "16",
//     "category": "Climate Change",
//     "name": "350.org",
//     "profilepic": "https://example.com/images/350_org_logo.jpg",
//     "loc": "Global",
//     "email": "info@350.org",
//     "ratingsCount": 4700,
//     "coverpic": "https://example.com/images/350_org_cover.jpg",
//     "phone": "13790",
//     "bio": "350.org is a global movement working to address the climate crisis. We strive to build a future that's just, equitable, and sustainable by mobilizing people worldwide to take action and advocate for solutions to climate change."
//   },
//   {
//     "id": "17",
//     "category": "Women's Rights",
//     "name": "Equality Now",
//     "profilepic": "https://example.com/images/equality_now_logo.jpg",
//     "loc": "Global",
//     "email": "info@equalitynow.org",
//     "ratingsCount": 5300,
//     "coverpic": "https://example.com/images/equality_now_cover.jpg",
//     "phone": "24680",
//     "bio": "Equality Now is an international human rights organization that works to promote and protect the rights of women and girls around the world. We focus on legal advocacy, public mobilization, and influencing policy to achieve gender equality."
//   },
//   {
//     "id": "18",
//     "category": "Homelessness",
//     "name": "National Alliance to End Homelessness",
//     "profilepic": "https://example.com/images/end_homelessness_logo.jpg",
//     "loc": "United States",
//     "email": "info@endhomelessness.org",
//     "ratingsCount": 4200,
//     "coverpic": "https://example.com/images/end_homelessness_cover.jpg",
//     "phone": "13579",
//     "bio": "The National Alliance to End Homelessness is a nonpartisan, nonprofit organization committed to preventing and ending homelessness in the United States. We provide research, policy advocacy, and capacity building to support effective solutions."
//   }