/**
 * Neighborhood Helper — data-minneapolis.js
 * Minneapolis-specific neighborhoods and resources.
 * Statewide/Twin Cities-wide orgs (211, 988, HOME Line, MLA, ILCM,
 * MN Food HelpLine, Second Harvest, MACV, MN Warmline, AARP Tax,
 * Prepare+Prosper, 180 Degrees, MN Recovery, Centro) live in
 * data-stpaul.js tagged d:['all'] and show for Minneapolis users too.
 * Verified May 2026.
 */

var MPLS_HOODS = [
  {id:'mpls_north',    nameKey:'h_mpls_north',    subKey:'h_mpls_north_sub'},
  {id:'mpls_ne',       nameKey:'h_mpls_ne',       subKey:'h_mpls_ne_sub'},
  {id:'mpls_phillips', nameKey:'h_mpls_phillips', subKey:'h_mpls_phillips_sub'},
  {id:'mpls_cedar',    nameKey:'h_mpls_cedar',    subKey:'h_mpls_cedar_sub'},
  {id:'mpls_south',    nameKey:'h_mpls_south',    subKey:'h_mpls_south_sub'},
  {id:'mpls_any',      nameKey:'h_mpls_any',      subKey:'h_mpls_any_sub'}
];

var MPLS_R = {

  /* ── CITYWIDE / HENNEPIN COUNTY ──────────────────────────────────── */

  henn_shelter:{name:'Hennepin Shelter Hotline',tagline:'Emergency shelter for Hennepin County residents. A trained specialist helps you find a safe place to stay. Operated by Catholic Charities Twin Cities.',phone:'612-204-8200',addr:'Call first - they coordinate placement',hrs:'Mon-Fri 8am-10pm. Sat-Sun and holidays 1-9pm. After hours: call 2-1-1',url:'https://www.hennepincounty.gov/services/assistance/homelessness/homelessness-housing-resources',langs:['English'],urg:true,d:['mpls_north','mpls_ne','mpls_phillips','mpls_cedar','mpls_south','mpls_any']},

  henn_snap:{name:'Hennepin County SNAP Food Benefits',tagline:'Apply for monthly food benefits (food stamps). Benefits load onto an EBT card for use at most grocery stores. Apply online, by phone, or in person.',phone:'612-596-1300',addr:'Apply at mnbenefits.mn.gov or call',hrs:'Monday through Friday, 8am-4:30pm',url:'https://www.hennepincounty.gov/services/assistance/food-assistance',langs:['English','Spanish','Somali','Hmong'],urg:false,d:['mpls_north','mpls_ne','mpls_phillips','mpls_cedar','mpls_south','mpls_any']},

  henn_front_door:{name:'Hennepin County Front Door - Benefits Help',tagline:'Call to get help identifying what county services you qualify for - cash assistance, child care, health care, housing, and more. Monday through Friday.',phone:'612-348-4111',addr:'Call or visit a Human Service Center',hrs:'Monday through Friday, 8am-4pm',url:'https://www.hennepin.us/en/residents/assistance',langs:['English','Spanish','Somali','Hmong'],urg:false,d:['mpls_north','mpls_ne','mpls_phillips','mpls_cedar','mpls_south','mpls_any']},

  mpls_era:{name:'Minneapolis Emergency Rent Assistance',tagline:'Help paying overdue rent if you have an eviction notice. Apply through Align MPLS. Eligibility based on income.',phone:'612-787-8007',addr:'Apply at alignmpls.org or by phone',hrs:'Call for current availability',url:'https://www.minneapolismn.gov/government/programs-initiatives/housing/rental-assistance/',langs:['English','Spanish','Somali','Hmong'],urg:true,d:['mpls_north','mpls_ne','mpls_phillips','mpls_cedar','mpls_south','mpls_any']},

  cap_hc:{name:'CAP-HC - Energy Bill Help (Hennepin)',tagline:'Free help paying heating and energy bills through the LIHEAP program for qualifying Hennepin County households.',phone:'952-933-9639',addr:'8800 Highway 7 Suite 401, St. Louis Park 55426',hrs:'Monday through Friday, 8am-4:30pm',url:'https://caphennepin.org/',langs:['English','Spanish','Somali','Hmong'],urg:false,d:['mpls_north','mpls_ne','mpls_phillips','mpls_cedar','mpls_south','mpls_any']},

  mpls_day1:{name:'Day One - Domestic Violence Crisis Line',tagline:'24-hour crisis line connecting survivors of domestic violence, sexual assault, and trafficking to the nearest shelter and services.',phone:'1-866-223-1111',addr:'Call or text from anywhere in Minnesota',hrs:'24 hours a day, 7 days a week',url:'https://dayoneservices.org/',langs:['English','Spanish','Somali','Hmong'],urg:true,d:['mpls_north','mpls_ne','mpls_phillips','mpls_cedar','mpls_south','mpls_any']},

  mpls_careerforce:{name:'CareerForce Minneapolis - Free Job Help',tagline:'Free job search help, resume writing, interview prep, and career training. Veterans services available. No cost for any services.',phone:'612-821-4411',addr:'2700 Freeway Blvd, Brooklyn Center 55430',hrs:'Monday through Friday, 8am-4:30pm',url:'https://careerforce.mn.gov/',langs:['English'],urg:false,d:['mpls_north','mpls_ne','mpls_phillips','mpls_cedar','mpls_south','mpls_any']},

  mpls_wic:{name:'WIC - Food Help for Families (Hennepin)',tagline:'Free food benefits for pregnant women, new moms, babies, and children under 5. Nutrition education and referrals included.',phone:'612-543-5220',addr:'Multiple Minneapolis locations - call for nearest',hrs:'Monday through Friday, business hours',url:'https://www.hennepin.us/residents/health-medical/wic',langs:['English','Spanish','Hmong','Somali'],urg:false,d:['mpls_north','mpls_ne','mpls_phillips','mpls_cedar','mpls_south','mpls_any']},

  mpls_hml:{name:'HOME Line - Free Renter Legal Help',tagline:'Talk to a free housing attorney about your rights as a renter. No appointment needed. Serves all of Minnesota including Minneapolis.',phone:'612-728-5767',addr:'Phone - serves all of Minnesota',hrs:'Monday through Friday, business hours',url:'https://homelinemn.org/',langs:['English','Spanish','Somali','Hmong'],urg:false,d:['mpls_north','mpls_ne','mpls_phillips','mpls_cedar','mpls_south','mpls_any']},

  mpls_stmary:{name:"St. Mary's Health Clinics - Free Medical",tagline:'Completely free primary care for low-income uninsured adults. No Medicare, Medicaid, or MinnesotaCare. Multiple Minneapolis sites. By appointment.',phone:'651-287-7777',addr:'Multiple Minneapolis locations - call for nearest',hrs:'Clinics Mon-Thu afternoons. Call first.',url:'https://www.stmaryshealthclinics.org/',langs:['English','Spanish'],urg:false,d:['mpls_north','mpls_ne','mpls_phillips','mpls_cedar','mpls_south','mpls_any']},

  hcmc:{name:'Hennepin Healthcare (HCMC)',tagline:'Level 1 trauma center and public hospital serving all patients regardless of ability to pay. Emergency, primary care, mental health, dental, and specialty care.',phone:'612-873-3000',addr:'701 Park Ave, Minneapolis 55415',hrs:'Emergency: 24 hours. Clinics: Mon-Fri 6:30am-8pm',url:'https://hennepinhealthcare.org/',langs:['English','Spanish','Somali','Hmong'],urg:true,d:['mpls_north','mpls_ne','mpls_phillips','mpls_cedar','mpls_south','mpls_any']},

  henn_mh:{name:'Hennepin County Mental Health Services',tagline:'Call to get connected to mental health and substance use services in Hennepin County. Staff help you find the right program.',phone:'612-348-4111',addr:'525 Portland Ave, Minneapolis 55415 (Health Services Building)',hrs:'Monday through Friday, 8am-4pm',url:'https://www.hennepin.us/en/residents/health-medical/mental-health-substance-use',langs:['English','Spanish','Somali','Hmong'],urg:false,d:['mpls_north','mpls_ne','mpls_phillips','mpls_cedar','mpls_south','mpls_any']},

  mpls_wlk:{name:'Walk-In Counseling Center - Minneapolis',tagline:'Free anonymous counseling. No appointment, no insurance, no ID needed.',phone:'612-870-0565',addr:'2421 Chicago Ave S, Minneapolis 55404',hrs:'Call for clinic hours',url:'https://walkin.org/',langs:['English'],urg:false,d:['mpls_phillips','mpls_south','mpls_any']},

  comm_dental_mpls:{name:'Community Dental Care - Minneapolis',tagline:'Affordable dental care on a sliding scale. Medical Assistance accepted.',phone:'612-332-6669',addr:'1414 S Harmon Place, Minneapolis 55403',hrs:'Call for appointment hours',url:'https://www.communitydentalcare.org/',langs:['English','Spanish'],urg:false,d:['mpls_phillips','mpls_south','mpls_any']},

  nwhp:{name:'NeighborWorks Home Partners - Down Payment Help',tagline:'Down payment assistance for first-time homebuyers in Hennepin County through the HRA Homebuyer Assistance Program. Income limits apply.',phone:'651-292-8710',addr:'Serves Hennepin County',hrs:'Monday through Friday, business hours',url:'https://nwhomepartners.org/',langs:['English'],urg:false,d:['mpls_north','mpls_ne','mpls_phillips','mpls_cedar','mpls_south','mpls_any']},

  mpls_stable_homes:{name:'Stable Homes Stable Schools',tagline:'Emergency and multi-year rental assistance for Minneapolis Public School families at risk of losing housing. Apply through your child\'s elementary school.',phone:'612-668-0000',addr:'Apply through any MPS elementary school',hrs:'Contact your school',url:'https://www.minneapolismn.gov/government/programs-initiatives/housing/stable-homes-stable-schools/',langs:['English','Spanish','Somali','Hmong'],urg:false,d:['mpls_north','mpls_ne','mpls_phillips','mpls_cedar','mpls_south']},

  henn_school_housing:{name:'Hennepin County School to Housing',tagline:'Housing help for families in temporary housing whose children attend school in Brooklyn Center, Osseo, Bloomington, Richfield, Hopkins, or Eden Prairie districts.',phone:'612-348-4111',addr:'Apply through your child\'s school or call',hrs:'Monday through Friday, business hours',url:'https://www.hennepincounty.gov/services/assistance/homelessness/homelessness-housing-resources',langs:['English','Spanish','Somali','Hmong'],urg:false,d:['mpls_north','mpls_ne','mpls_phillips','mpls_cedar','mpls_south','mpls_any']},

  mpls_va_crrc:{name:'Minneapolis VA Community Resource Center',tagline:'One-stop housing, health, and benefit services for homeless or at-risk veterans in the Minneapolis area.',phone:'612-313-3240',addr:'1201 Harmon Place, Minneapolis 55403',hrs:'Monday through Friday, business hours',url:'https://www.va.gov/',langs:['English'],urg:false,d:['mpls_north','mpls_ne','mpls_phillips','mpls_cedar','mpls_south','mpls_any']},

  avivo:{name:'Avivo - Recovery, Housing, and Jobs',tagline:'Chemical health treatment, mental health services, housing, and employment support. Serves over 11,000 people a year. Medicaid accepted. Sliding scale.',phone:'612-767-0900',addr:'1900 Chicago Ave, Minneapolis 55404',hrs:'Call for intake hours',url:'https://avivomn.org/',langs:['English','Spanish','Somali'],urg:false,d:['mpls_north','mpls_ne','mpls_phillips','mpls_cedar','mpls_south','mpls_any']},

  /* ── NORTH MINNEAPOLIS ────────────────────────────────────────────── */

  northpoint:{name:'NorthPoint Health & Wellness',tagline:'Full health center in North Minneapolis - medical, dental, mental health, pharmacy, and food shelf. Sliding scale. No one turned away.',phone:'612-543-2500',addr:'2220 Plymouth Ave N, Minneapolis 55411',hrs:'Mon/Wed/Fri 8am-5pm, Tue/Thu 8am-7pm. Select Saturdays - call ahead.',url:'https://www.northpointhealth.org/',langs:['English','Spanish','Somali','Hmong'],urg:false,d:['mpls_north']},

  northpoint_food:{name:'NorthPoint Food Shelf',tagline:'Client choice food shelf. Free Fresh Food Fridays in summer (2nd and 4th Fridays May-September, rain or shine).',phone:'612-767-9500',addr:'2220 Plymouth Ave N, Minneapolis 55411',hrs:'Mon & Wed 10am-4pm, Tue & Thu 10am-7pm',url:'https://www.northpointhealth.org/en/helping-our-neighbors/support-everyday-life/community-food-shelf',langs:['English','Spanish','Somali','Hmong'],urg:false,d:['mpls_north']},

  puc_north:{name:'Pillsbury United - North Market',tagline:'Food access, workforce training, youth programs, and community health in the Webber-Camden neighborhood.',phone:'612-302-3400',addr:'North Minneapolis - call for current location',hrs:'Call for program schedule',url:'https://pillsburyunited.org/',langs:['English','Somali'],urg:false,d:['mpls_north']},

  puc_oak:{name:'Pillsbury United - Oak Park Center',tagline:'Youth programs, workforce development, community meals Tuesday through Thursday 4-6pm, and community services in North Minneapolis.',phone:'612-302-3400',addr:'1701 Oak Park Ave N, Minneapolis 55411',hrs:'Call for program schedule. Community meals Tue-Thu 4-6pm.',url:'https://pillsburyunited.org/',langs:['English','Somali'],urg:false,d:['mpls_north']},

  esns_food:{name:'East Side Neighborhood Services Food Shelf',tagline:'Client-choice food shelf. Mobile food shelf delivers to 52 high-rise buildings. Glendale Food Shelf open to the public twice per month.',phone:'612-791-4492',addr:'Glendale Food Shelf: 2300 SE 26th Ave, Minneapolis',hrs:'Mon & Thu 12-4pm, Tue & Wed 2-6pm',url:'https://www.esns.org/foodprograms',langs:['English','Somali','Spanish'],urg:false,d:['mpls_north','mpls_ne']},

  avenues_youth:{name:'Avenues for Youth - Shelter and Housing',tagline:'Shelter and transitional housing for youth ages 18-24 in North Minneapolis. One emergency bed for 1-3 night stays. LGBTQ+ youth welcome. Open 24 hours.',phone:'612-522-1690',addr:'1708 Oak Park Ave N, Minneapolis 55411',hrs:'24 hours a day',url:'https://avenuesforyouth.org/',langs:['English'],urg:true,d:['mpls_north']},

  good_hood_food:{name:'Good in the Hood - Beacon of Hope Food Shelf',tagline:'Free food shelf at Beacon of Hope Church in North Minneapolis. Open to all, no geographic restrictions.',phone:'612-440-7463',addr:'2827 Newton Ave N, Minneapolis 55411',hrs:'Call for current hours',url:'https://www.goodinthehood.org/our-programs/food-programs/food-in-the-hood',langs:['English'],urg:false,d:['mpls_north']},

  salv_north:{name:'Salvation Army - North Minneapolis Food Shelf',tagline:'Free food shelf and meals in North Minneapolis. No questions asked.',phone:'612-522-4871',addr:'2024 Lyndale Ave N, Minneapolis 55411',hrs:'Mon/Tue/Wed/Fri 8:30-11am and 1-3pm. Thu 1-3pm.',url:'https://centralusa.salvationarmy.org/twin-cities/',langs:['English'],urg:false,d:['mpls_north']},

  /* ── NORTHEAST MINNEAPOLIS ───────────────────────────────────────── */

  salv_ne:{name:'Salvation Army - Northeast Food Shelf and Meals',tagline:'Free food shelf Monday through Friday. Hot lunch Monday through Friday 11:30am-12:30pm. No questions asked.',phone:'612-789-2858',addr:'2727 Central Ave NE, Minneapolis 55418',hrs:'Food shelf: Mon-Fri 8am-12pm and 1-4pm. Lunch: Mon-Fri 11:30am-12:30pm',url:'https://centralusa.salvationarmy.org/twin-cities/',langs:['English'],urg:false,d:['mpls_ne']},

  /* ── CEDAR-RIVERSIDE ─────────────────────────────────────────────── */

  puc_coyle:{name:'Pillsbury United - Brian Coyle Center',tagline:'Community hub in Cedar-Riverside for East African and immigrant families. Food, health, youth programs, legal help, and workforce training.',phone:'612-338-5282',addr:'420 15th Ave S, Minneapolis 55454',hrs:'Monday through Friday, business hours. Call for program schedule.',url:'https://pillsburyunited.org/site/brian-coyle/',langs:['English','Somali','Spanish','Hmong'],urg:false,d:['mpls_cedar']},

  /* ── PHILLIPS / SOUTH ────────────────────────────────────────────── */

  puc_waite:{name:'Pillsbury United - Waite House',tagline:'Free food 2nd and 4th Wednesdays 1pm and Sundays 2pm. Free meals 8am, 12pm, 5pm daily. No ID required. Somali, Spanish, Hmong staff on site.',phone:'612-721-1681',addr:'2323 11th Ave S, Minneapolis 55404',hrs:'Meals: 8am, 12pm, 5pm daily. Food dist: 2nd & 4th Wed 1pm, Sun 2pm',url:'https://pillsburyunited.org/site/waite-house/',langs:['English','Spanish','Somali','Hmong'],urg:true,d:['mpls_phillips']},

  puc_pillsbury:{name:'Pillsbury United - Pillsbury House',tagline:'Arts, theater, food access, youth development, and community services in the Phillips neighborhood.',phone:'612-824-0708',addr:'3501 Chicago Ave S, Minneapolis 55407',hrs:'Call for program schedule',url:'https://pillsburyunited.org/site/pillsbury-house/',langs:['English','Spanish','Somali'],urg:false,d:['mpls_phillips']},

  simpson_food:{name:'Simpson Food Shelf',tagline:'Free food shelf for south Minneapolis. Serves area between Franklin Ave and Lake St, Portland to Lyndale. Limit once per 30 days.',phone:'612-874-7744',addr:'2740 1st Ave S, Minneapolis 55408',hrs:'Tue-Fri 9:30am-12:15pm',url:'https://simpsonhousing.org/',langs:['English'],urg:false,d:['mpls_phillips','mpls_south']},

  simpson_housing:{name:'Simpson Community Shelter',tagline:'Emergency shelter for single adults. New facility opened January 2026. Must be referred through the Hennepin Shelter Hotline.',phone:'612-874-8683',addr:'160 Glenwood Ave, Minneapolis 55405',hrs:'Call Hennepin Shelter Hotline 612-204-8200 for referral',url:'https://simpsonhousing.org/',langs:['English'],urg:true,d:['mpls_phillips','mpls_south','mpls_any']},

  psp:{name:'People Serving People - Family Shelter',tagline:'Largest family homeless shelter in Minneapolis. Emergency shelter, school support, mental health, technology center, and on-site childcare. Referred through Hennepin County.',phone:'612-332-4500',addr:'614 S 3rd St, Minneapolis 55415',hrs:'Referrals through Hennepin County 612-348-4111',url:'https://www.peopleservingpeople.org/',langs:['English','Spanish','Somali','Hmong'],urg:true,d:['mpls_phillips','mpls_south','mpls_any']},

  cuhcc:{name:'Community-University Health Care Center',tagline:'Full health clinic run by the University of Minnesota. Sliding scale. Medical, dental, mental health, and pharmacy in the Phillips neighborhood.',phone:'612-627-4774',addr:'2001 Bloomington Ave S, Minneapolis 55404',hrs:'Monday through Friday, 8am-5pm',url:'https://cuhcc.umn.edu/',langs:['English','Spanish','Somali','Hmong'],urg:false,d:['mpls_phillips','mpls_south']},

  ces_food:{name:'Community Emergency Service (CES) Food Shelf',tagline:'Free food shelf in Phillips. No geographic restrictions. Appointments online or by phone. Bonus Friday giveaways weekly.',phone:'612-870-1125',addr:'1900 11th Ave S, Minneapolis 55404',hrs:'Mon-Wed 1-4pm and Wed evening 1-4pm. Fri bonus 1-3pm',url:'https://www.cesmpls.org/',langs:['English','Spanish'],urg:false,d:['mpls_phillips']},

  joyce_food:{name:'Joyce Uptown Food Shelf',tagline:'Free groceries for the Uptown, Lowry Hill East, and south Minneapolis area. Walk in during open hours. No geographic restrictions.',phone:'612-825-4431',addr:'3041 Fremont Ave S, Minneapolis 55408',hrs:'Mon 11:30am-4pm, Tue 10:30am-4pm, Wed 12:30-4pm, Thu 11:30am-6pm, Sat 9:30am-1:15pm',url:null,langs:['English'],urg:false,d:['mpls_south','mpls_phillips']},

  salv_elake:{name:'Salvation Army - East Lake Street Food Shelf',tagline:'Free food shelf and hot lunch Monday through Wednesday in south Minneapolis. No questions asked.',phone:'612-721-1513',addr:'1604 E Lake St, Minneapolis 55407',hrs:'Food shelf: Mon-Fri 8-11am and 1-3pm. Lunch: Mon-Wed 12-1pm',url:'https://centralusa.salvationarmy.org/twin-cities/',langs:['English'],urg:false,d:['mpls_south','mpls_phillips']},

  bridge_youth:{name:'The Bridge for Youth - Shelter and Crisis',tagline:'Emergency shelter and housing for youth ages 10-17. Crisis line 24/7. Case management, mental health, and outreach. LGBTQ+ welcoming.',phone:'612-377-8800',addr:'1111 W 22nd St, Minneapolis 55405',hrs:'24 hours. Crisis text: 612-400-7233',url:'https://bridgeforyouth.org/',langs:['English'],urg:true,d:['mpls_south','mpls_phillips','mpls_any']},

  youthlink:{name:'YouthLink - Drop-In for Homeless Youth',tagline:'Drop-in center for youth ages 16-24 experiencing homelessness. Hot meals, showers, clothing, phone access, case management, housing help.',phone:'612-252-1200',addr:'41 N 12th St, Minneapolis 55403',hrs:'Call for current drop-in hours',url:'https://www.youthlinkmn.org/',langs:['English'],urg:true,d:['mpls_south','mpls_phillips','mpls_any']},

  agate_housing:{name:'Agate Housing & Services',tagline:'Coordinated entry for families needing shelter in Hennepin County. Rapid re-housing, permanent supportive housing, and street outreach. Handbook of the Streets available free.',phone:'612-874-0311',addr:'2309 Nicollet Ave, Minneapolis 55404',hrs:'Monday through Friday, 8:30am-4pm',url:'https://agatemn.org/',langs:['English'],urg:true,d:['mpls_north','mpls_ne','mpls_phillips','mpls_cedar','mpls_south','mpls_any']},

  harbor_light:{name:'Salvation Army Harbor Light - Shelter and Meals',tagline:'Emergency shelter for single adults and daily hot dinner. Must be referred through Adult Shelter Connect. Dinner Thursday through Monday 6pm.',phone:'612-767-3100',addr:'1010 Currie Ave, Minneapolis 55403',hrs:'Dinner: Thu-Mon 6pm. Shelter referral via Hennepin Shelter Hotline.',url:'https://centralusa.salvationarmy.org/twin-cities/',langs:['English'],urg:true,d:['mpls_south','mpls_any']}

,

  /* ── FOOD (fills the food tile gap) ─────────────────────────────────── */
  loaves_fish_mpls:{name:'Loaves & Fishes - Free Meals Minneapolis',tagline:'Free hot meals at multiple Minneapolis sites with no questions asked. Congregate dining and to-go options. Everyone welcome regardless of background.',phone:'612-379-1111',addr:'Multiple Minneapolis locations - call for nearest site',hrs:'Call for site-specific hours',url:'https://www.loavesandfishesmn.org/',langs:['English'],urg:false,d:['mpls_north','mpls_ne','mpls_phillips','mpls_cedar','mpls_south','mpls_any']},

  sharing_caring:{name:'Sharing & Caring Hands - Food, Shelter, and More',tagline:'Free meals (3,000 per week), clothing closet, free dental, showers, beds for new apartments, and family shelter (Mary\'s Place). Walk in Mon-Thu 10am.',phone:'612-338-4640',addr:'525 N 7th St, Minneapolis 55405',hrs:'Mon-Thu 10am and 12noon for services. Meals served daily.',url:'https://sharingandcaringhands.org/',langs:['English'],urg:true,d:['mpls_south','mpls_phillips','mpls_any']},

  higher_ground:{name:'Catholic Charities Higher Ground - Shelter',tagline:'Overnight shelter for single adult men in downtown Minneapolis not eligible for county shelter. Open 4pm to 10am, 7 days a week. Pay-for-stay option available.',phone:'612-204-8552',addr:'165 Glenwood Ave N, Minneapolis 55405',hrs:'4pm to 10am daily. Referral via Hennepin Shelter Hotline.',url:'https://cctwincities.org/',langs:['English'],urg:true,d:['mpls_south','mpls_any']},

  adult_shelter_connect:{name:'Adult Shelter Connect - Shelter Placement',tagline:'Walk-in assessment site for single adults needing shelter in Hennepin County. Visit in person Mon-Fri to get placed in a Minneapolis shelter.',phone:'612-248-2350',addr:'215 S 8th St (lower level of St. Olaf Catholic Church), Minneapolis 55402',hrs:'Walk-in: Mon-Fri 10am-5pm',url:'https://www.hennepincounty.gov/',langs:['English'],urg:true,d:['mpls_south','mpls_any']},

  avivo_village:{name:'Avivo Village - Indoor Shelter',tagline:'Innovative indoor shelter and services for individuals experiencing unsheltered homelessness. On-site recovery, mental health, and housing navigation.',phone:'612-752-8000',addr:'1251 Washington Ave N, Minneapolis 55401',hrs:'Call for intake information',url:'https://avivomn.org/avivovillage',langs:['English'],urg:true,d:['mpls_north','mpls_any']},

  hcmc_food:{name:'HCMC Food Shelf - Hennepin Healthcare',tagline:'Free food shelf at Hennepin Healthcare medical campus downtown. Pre-packed groceries and hygiene items. No geographic restrictions. Walk in during hours.',phone:'612-594-2000',addr:'714 Park Ave, Minneapolis 55404',hrs:'Call for current hours',url:'https://hennepinhealthcare.org/',langs:['English','Spanish'],urg:false,d:['mpls_south','mpls_phillips','mpls_any']},

  peace_house:{name:'Peace House Community - Day Shelter',tagline:'Free drop-in day shelter for adults experiencing homelessness in Minneapolis. Meals, showers, mail, laundry, phone access, and supportive community. No ID required.',phone:'612-822-8802',addr:'2301 13th Ave S, Minneapolis 55404',hrs:'Call for current open hours',url:'https://peacehousecommunity.org/',langs:['English'],urg:true,d:['mpls_south','mpls_phillips','mpls_any']},

  somali_food:{name:'Somali Community Bilingual Food Shelf',tagline:'Free food shelf serving the Somali community and open to all. Culturally familiar foods available. East Lake Street, South Minneapolis.',phone:'612-871-6786',addr:'207 E Lake St, Minneapolis 55408',hrs:'Call for current hours',url:null,langs:['English','Somali'],urg:false,d:['mpls_south','mpls_phillips']},

  /* ── REENTRY — MINNEAPOLIS SPECIFIC ─────────────────────────────── */

  amicus:{name:'Amicus Reconnect - Reentry Drop-In',tagline:'Free drop-in reentry services for people with a criminal background. Housing, jobs, transportation, clothing, computer and phone access. No appointment needed.',phone:'612-877-4250',addr:'Minneapolis - call for current address',hrs:'Monday through Friday, 9am-noon and 1-3pm',url:'https://www.voamnwi.org/amicus-reconnect-services',langs:['English'],urg:false,d:['mpls_north','mpls_ne','mpls_phillips','mpls_cedar','mpls_south','mpls_any']},

  voa_reentry:{name:'Volunteers of America - Residential Reentry',tagline:'Halfway house for people completing their sentence in the community. Employment, housing, substance use support, and case management. Minneapolis location.',phone:'612-338-0113',addr:'Minneapolis - call for intake',hrs:'Call for intake information',url:'https://www.voamnwi.org/residential-reentry-centers',langs:['English'],urg:false,d:['mpls_north','mpls_ne','mpls_phillips','mpls_cedar','mpls_south','mpls_any']},

  tc_rise:{name:'Twin Cities R!SE - Job Training and Reentry',tagline:'Free job readiness training for people facing barriers including criminal records. Career coaching, employer connections, and personal empowerment. North Minneapolis and Cedar-Riverside roots.',phone:'612-338-0295',addr:'1845 Stinson Pkwy NE, Minneapolis 55418',hrs:'Monday through Friday, business hours',url:'https://www.twincitiesrise.org/',langs:['English','Somali'],urg:false,d:['mpls_north','mpls_ne','mpls_cedar','mpls_any']},

  tone_up:{name:'T.O.N.E. U.P. - Reentry Support',tagline:'Reentry support founded by a formerly incarcerated person. Mentorship, employment, expungement help, housing, and mental wellness for justice-impacted people. Twin Cities.',phone:null,addr:'Twin Cities - contact online',hrs:'Call or visit online',url:'https://toneup.org/',langs:['English'],urg:false,d:['mpls_north','mpls_ne','mpls_phillips','mpls_cedar','mpls_south','mpls_any']},

  henn_exp:{name:'Hennepin County Expungement Clinic',tagline:'Free walk-in expungement help at the Hennepin County Law Library. Volunteer attorneys help you prepare your petition. No appointment needed.',phone:'612-348-3689',addr:'Hennepin County Government Center, 300 S 6th St, Minneapolis 55487',hrs:'Check with library for current clinic schedule',url:'https://mncourts.libguides.com/expungement/legalhelp',langs:['English'],urg:false,d:['mpls_north','mpls_ne','mpls_phillips','mpls_cedar','mpls_south','mpls_any']},

  better_futures:{name:'Better Futures Minnesota - Jobs for Returning Citizens',tagline:'Environmental workforce training and jobs specifically for men returning from incarceration. Paid work, job training, and support services.',phone:'612-746-1882',addr:'Minneapolis - call for location',hrs:'Monday through Friday, business hours',url:'https://betterfuturesmn.org/',langs:['English'],urg:false,d:['mpls_north','mpls_ne','mpls_phillips','mpls_cedar','mpls_south','mpls_any']},

  /* ── KIDS / FAMILIES ────────────────────────────────────────────── */

  families_moving_fwd:{name:'Families Moving Forward - Shelter for Families',tagline:'Overnight shelter for families provided by 43 Twin Cities congregations every week of the year. Up to 8 families hosted at a time. Apply through Portico Interfaith.',phone:'612-529-2185',addr:'1808 Emerson Ave N, Minneapolis 55411',hrs:'Apply in advance - call for intake process',url:'https://www.beaconinterfaith.org/',langs:['English'],urg:false,d:['mpls_north','mpls_any']},

  mpls_wic_north:{name:'WIC Clinic - North Minneapolis',tagline:'Free food benefits and nutrition support for pregnant women, new moms, babies, and children under 5 at the NorthPoint campus.',phone:'612-543-5220',addr:'2220 Plymouth Ave N, Minneapolis 55411',hrs:'Monday through Friday, business hours',url:'https://www.hennepin.us/residents/health-medical/wic',langs:['English','Spanish','Hmong','Somali'],urg:false,d:['mpls_north']},

  /* ── WORK / EMPLOYMENT ──────────────────────────────────────────── */

  goodwill_reentry:{name:'Goodwill Easter Seals - Reentry Employment',tagline:'Job training, housing navigation, and employment support for people returning from incarceration. Free services through the reentry program.',phone:'651-379-5800',addr:'Minneapolis and Saint Paul locations - call for nearest',hrs:'Monday through Friday, business hours',url:'https://www.goodwilleasterseals.org/',langs:['English','Spanish','Somali','Hmong'],urg:false,d:['mpls_north','mpls_ne','mpls_phillips','mpls_cedar','mpls_south','mpls_any']},

  /* ── MINNEAPOLIS REENTRY ADDITIONS ───────────────────────────────── */

  all_square:{name:'All Square - Fellowship and Legal Education',tagline:'Nonprofit social enterprise investing in formerly incarcerated people. Year-long fellowship with living wage job at the grilled cheese restaurant, law and entrepreneurship classes, therapy, and microgrants. Prison-to-Law Pipeline offers paralegal degrees inside MN prisons.',phone:'612-787-7164',addr:'4047 Minnehaha Ave S, Minneapolis 55406',hrs:'Restaurant Wed-Sun. Call for fellowship intake.',url:'https://allsquarempls.com/',langs:['English'],urg:false,d:['mpls_phillips','mpls_south','mpls_any']},

  portland_house:{name:'Portland House (LSS) - Residential Reentry',tagline:'Residential reentry for adult men as an alternative to incarceration. Must be referred through a correctional facility, agency, or court. Employment, housing, and community reintegration support.',phone:'612-331-1087',addr:'514 11th Ave SE, Minneapolis 55414',hrs:'Referral required - contact your corrections officer or case manager',url:'https://www.lssmn.org/services/behavioral-health/specialties/portland-house',langs:['English'],urg:false,d:['mpls_ne','mpls_any']},

  kingsmen:{name:'Kingsmen Project - Peer Mentorship for Reentry',tagline:'Free mentorship and peer support for people returning from incarceration. Weekly group meetings, one-on-one mentoring, and pro-social activities. Pre-release outreach available. Founded by formerly incarcerated people. Twin Cities.',phone:null,addr:'Twin Cities - contact online to connect with a mentor',hrs:'Weekly group meetings - contact for schedule',url:'https://thekingsmenproject.org/',langs:['English'],urg:false,d:['mpls_north','mpls_ne','mpls_phillips','mpls_cedar','mpls_south','mpls_any']}
};
