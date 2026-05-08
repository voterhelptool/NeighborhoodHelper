/**
 * Neighborhood Helper — data-suburbs.js
 * Twin Cities suburbs: inner (SW Hennepin), northwest (Brooklyn Park/Center/Crystal),
 * west (Plymouth/Wayzata/Minnetonka), and south/Dakota County.
 * Verified May 2026.
 *
 * Statewide/Twin Cities-wide orgs (211, 988, HOME Line, MLA, MACV, MN Warmline,
 * Second Harvest, MN Food HelpLine, AARP Tax, Prepare+Prosper, Emerge MN,
 * MN Recovery, Goodwill Reentry, Amicus) are in data-stpaul.js tagged d:['all']
 * and will surface for all suburb users automatically.
 */

var SUBURB_HOODS = [
  /* Inner SW Suburbs */
  {id:'sub_bloomington', nameKey:'h_sub_bloomington', subKey:'h_sub_bloomington_sub'},
  {id:'sub_richfield',   nameKey:'h_sub_richfield',   subKey:'h_sub_richfield_sub'},
  {id:'sub_edina',       nameKey:'h_sub_edina',       subKey:'h_sub_edina_sub'},
  {id:'sub_slp',         nameKey:'h_sub_slp',         subKey:'h_sub_slp_sub'},
  {id:'sub_hopkins',     nameKey:'h_sub_hopkins',     subKey:'h_sub_hopkins_sub'},
  /* Northwest Suburbs */
  {id:'sub_bpark',       nameKey:'h_sub_bpark',       subKey:'h_sub_bpark_sub'},
  {id:'sub_bcenter',     nameKey:'h_sub_bcenter',     subKey:'h_sub_bcenter_sub'},
  {id:'sub_crystal',     nameKey:'h_sub_crystal',     subKey:'h_sub_crystal_sub'},
  /* West Suburbs */
  {id:'sub_plymouth',    nameKey:'h_sub_plymouth',    subKey:'h_sub_plymouth_sub'},
  {id:'sub_minnetonka',  nameKey:'h_sub_minnetonka',  subKey:'h_sub_minnetonka_sub'},
  /* South / Dakota County */
  {id:'sub_burnsville',  nameKey:'h_sub_burnsville',  subKey:'h_sub_burnsville_sub'},
  {id:'sub_dakota',      nameKey:'h_sub_dakota',      subKey:'h_sub_dakota_sub'}
];

/* Shorthand for all suburb hood IDs */
var _ALL_SUB = [
  'sub_bloomington','sub_richfield','sub_edina','sub_slp','sub_hopkins',
  'sub_bpark','sub_bcenter','sub_crystal',
  'sub_plymouth','sub_minnetonka',
  'sub_burnsville','sub_dakota'
];
var _INNER_SW = ['sub_bloomington','sub_richfield','sub_edina','sub_slp','sub_hopkins'];
var _NW      = ['sub_bpark','sub_bcenter','sub_crystal'];
var _WEST    = ['sub_plymouth','sub_minnetonka'];
var _SOUTH   = ['sub_burnsville','sub_dakota'];

var SUBURB_R = {

  /* ── INNER SW SUBURBS ─────────────────────────────────────────────
     Bloomington · Richfield · Edina · St. Louis Park · Hopkins
     Primary anchors: VEAP and STEP
  ─────────────────────────────────────────────────────────────────── */

  veap:{name:'VEAP - Food, Rent, and Utilities',tagline:'Largest food pantry in Minnesota. Free groceries, rent and utility help for Bloomington, Richfield, Edina, and South Minneapolis (55410/55417/55419). Appointment required. Express walk-in at Door 4. Home delivery for homebound.',phone:'952-888-9616',addr:'9600 Aldrich Ave S, Bloomington 55420',hrs:'Mon-Wed & Fri 8am-5pm, Thu 8am-7pm',url:'https://veap.org/',langs:['English','Spanish','Russian'],urg:false,d:_INNER_SW},

  step:{name:'STEP - St. Louis Park Emergency Program',tagline:'Food shelf, rent and utility help, clothing, school supplies, and social services for St. Louis Park residents. Kosher and halal foods available. Emergency walk-in food available.',phone:'952-925-4899',addr:'6812 W Lake St, St. Louis Park 55426',hrs:'Mon 8am-4pm, Tue noon-7pm, Wed 8am-4pm, Thu 8am-4pm, Fri 8am-noon',url:'https://www.stepslp.org/',langs:['English'],urg:false,d:['sub_slp']},

  edina_rc:{name:'Edina Resource Center',tagline:'Free connection to community services for Edina residents. Social workers connect you to food, housing, health care, financial help, and more. No appointment needed.',phone:'952-848-3936',addr:'5701 Normandale Rd, Edina 55424',hrs:'Monday through Friday, business hours',url:'https://edinaresourcecenter.com/',langs:['English'],urg:false,d:['sub_edina']},

  oasis_youth:{name:'Oasis for Youth - South Suburbs',tagline:'Drop-in resource center for youth ages 16-24 in Bloomington, Richfield, and Edina. Case management, housing help, basic needs, and connections to services. No youth in need turned away.',phone:'952-512-2061',addr:'2200 W Old Shakopee Rd, Bloomington 55431',hrs:'Mon/Wed/Fri 2-5pm, Tue/Thu noon-5pm',url:'https://www.oasisforyouth.org/',langs:['English'],urg:false,d:_INNER_SW},

  scs_home:{name:'Senior Community Services - Home Maintenance Help',tagline:'Free or low-cost lawn mowing, snow removal, minor repairs, and housekeeping for adults 60+ in Bloomington, Richfield, Edina, Eden Prairie, and St. Louis Park.',phone:'952-746-4046',addr:'Serves SW Hennepin County suburbs - call for service',hrs:'Monday through Friday, business hours',url:'https://seniorcommunity.org/services/home-program/',langs:['English'],urg:false,d:_INNER_SW},

  scs_outreach:{name:'Senior Community Services - Outreach',tagline:'Free in-home counseling and case management for seniors to remain independent in their own homes. Caregiver support groups and consultation. Serves suburban Hennepin County.',phone:'612-770-7005',addr:'Serves suburban Hennepin County - call for eligibility',hrs:'Monday through Friday, business hours',url:'https://seniorcommunity.org/services/senior-outreach-services/',langs:['English'],urg:false,d:_INNER_SW},

  henn_south_hsc:{name:'Hennepin County South Suburban Service Center',tagline:'Apply for SNAP, cash assistance, health care, emergency assistance, and other county programs. Located at the VEAP campus in Bloomington.',phone:'612-596-1300',addr:'9600 Aldrich Ave S, Bloomington 55420',hrs:'Monday through Friday, 8am-4:30pm',url:'https://www.hennepin.us/en/residents/assistance',langs:['English','Spanish','Somali','Hmong'],urg:false,d:_INNER_SW},

  bloomington_hra:{name:'Bloomington HRA Housing Resources',tagline:'City of Bloomington housing resource hub. Connects residents to rental assistance, VEAP partnership programs, and other housing help. Start here if you live in Bloomington.',phone:'952-563-8920',addr:'blm.mn/hraresources - or call city hall',hrs:'Monday through Friday, business hours',url:'https://www.bloomingtonmn.gov/hraresources',langs:['English'],urg:false,d:['sub_bloomington']},

  /* ── WEST SUBURBS ──────────────────────────────────────────────────
     Hopkins · Minnetonka · Excelsior · Shorewood · Deephaven
     Primary anchors: ICA Food Shelf and ResourceWest
  ─────────────────────────────────────────────────────────────────── */

  ica_food:{name:'ICA Food Shelf - Hopkins/Minnetonka',tagline:'Choice model food shelf - you shop like a grocery store. Serves Hopkins, Minnetonka, Excelsior, Shorewood, Deephaven, Greenwood, and Woodland. Home delivery available. School-based markets in Hopkins and Minnetonka schools.',phone:'952-938-0729',addr:'11588 K-Tel Dr, Minnetonka 55343',hrs:'Mon 10am-6:30pm, Tue 10am-3:30pm, Wed 9am-3:30pm, Thu 10am-3:30pm, 1st & 3rd Sat 10am-noon',url:'https://www.icafoodshelf.org/',langs:['English','Spanish','Somali','Hmong'],urg:false,d:['sub_hopkins','sub_minnetonka']},

  resource_west:{name:'ResourceWest - West Metro Community Services',tagline:'Resource navigation, emergency financial help, employment, and children\'s programs for Hopkins, Minnetonka, Excelsior, Shorewood, Deephaven, Greenwood, and Woodland. Spanish and Somali-speaking staff.',phone:'952-933-3860',addr:'1011 First St S Suite 109, Hopkins 55343',hrs:'Call for appointment hours',url:'https://resourcewest.org/',langs:['English','Spanish','Somali'],urg:false,d:['sub_hopkins','sub_minnetonka']},

  /* ── NORTHWEST SUBURBS ─────────────────────────────────────────────
     Brooklyn Park · Brooklyn Center · Crystal · New Hope · Robbinsdale
     Primary anchors: CEAP, PRISM, NEAR
  ─────────────────────────────────────────────────────────────────── */

  ceap:{name:'CEAP - Food, Seniors, and Family Services',tagline:'Free groceries by curbside appointment (same-day/next-day available). Meals on wheels, senior Silver Selects program (28 frozen meals/month for 60+), thrift store, and baby care packages. Serves Brooklyn Park, Brooklyn Center, and East Champlin.',phone:'763-566-9600',addr:'7051 Brooklyn Blvd, Brooklyn Center 55429',hrs:'Mon-Tue & Thu-Fri 8am-4:30pm, Wed 8am-7pm',url:'https://www.ceap.org/',langs:['English','Spanish'],urg:false,d:_NW},

  near_food:{name:'NEAR Food Shelf - Crystal/New Hope/Robbinsdale',tagline:'Free food shelf serving Crystal, New Hope, and Robbinsdale residents. Monthly visits. School supplies in August for families with current clients. Call to schedule.',phone:'763-533-2836',addr:'5209 W Broadway Ave, Crystal 55429',hrs:'Call for current hours',url:'https://www.nearfoodshelf.org/',langs:['English'],urg:false,d:['sub_crystal']},

  prism:{name:'PRISM - Northwest Suburbs Food and Housing',tagline:'Client-choice food shelf and housing assistance (eviction prevention for 250 households/year) in Golden Valley. Serves New Hope, Plymouth, Golden Valley, Crystal, and Robbinsdale. Walk-in welcome.',phone:'763-529-1350',addr:'1220 Zane Ave N, Golden Valley 55422',hrs:'Mon 11am-7pm, Tue & Wed 9am-4pm, Thu 9am-2pm',url:'https://prismmpls.org/',langs:['English'],urg:false,d:['sub_bpark','sub_bcenter','sub_crystal','mpls_north','mpls_any']},

  hopebridge:{name:'HopeBridge Food Shelf - New Hope/Crystal/Plymouth',tagline:'Appointment-based client-choice food shelf. Primarily serves New Hope, Crystal, and Plymouth but no one is turned away. Limited home delivery 2nd Monday monthly.',phone:'763-536-3284',addr:'New Hope Church, New Hope',hrs:'Call for current appointment hours',url:'https://www.hungersolutions.org/resource/hopebridge-food-shelf/',langs:['English'],urg:false,d:_NW},

  capi:{name:'CAPI USA - Immigrant and Refugee Services',tagline:'Connecting immigrants, refugees, and people of color with food, benefits navigation, economic empowerment, and community programs. Brooklyn Center and Brooklyn Park.',phone:'763-566-9600',addr:'7051 Brooklyn Blvd, Brooklyn Center 55429',hrs:'Monday through Friday, business hours',url:'https://capiusa.org/',langs:['English','Spanish','Somali','Hmong'],urg:false,d:_NW},

  brooklynk:{name:'BrooklynK - Youth Employment (Brooklyn Park/Center)',tagline:'Connects youth ages 14-21 in Brooklyn Center and Brooklyn Park with jobs, apprenticeships, internships, and mentoring opportunities. Free.',phone:'763-569-3400',addr:'Brooklyn Center Community Center, 6301 Shingle Creek Pkwy, Brooklyn Center 55430',hrs:'Call for program schedule',url:'https://www.ci.brooklyn-center.mn.us/government/departments/community-development/community-empowerment',langs:['English','Somali'],urg:false,d:_NW},

  henn_nw_hsc:{name:'Hennepin County NW Human Service Center',tagline:'Apply for SNAP, cash assistance, health care, and other county programs. Northwest suburbs location at the CEAP campus in Brooklyn Center.',phone:'612-596-1300',addr:'7051 Brooklyn Blvd, Brooklyn Center 55429',hrs:'Monday through Friday, 8am-4:30pm',url:'https://www.hennepin.us/en/residents/assistance',langs:['English','Spanish','Somali','Hmong'],urg:false,d:_NW},

  /* ── WEST METRO OUTER SUBURBS ──────────────────────────────────────
     Plymouth · Wayzata · Orono · Long Lake · Medina
     Primary anchor: IOCP
  ─────────────────────────────────────────────────────────────────── */

  iocp:{name:'IOCP - Interfaith Outreach & Community Partners',tagline:'Food shelf (SuperShelf), thrift store (Resale Select), housing navigation, employment services, and childcare scholarships. Serves Plymouth (west of 494), Hamel, Long Lake, Medina, Minnetonka Beach, Orono, and Wayzata since 1979.',phone:'763-489-7500',addr:'1605 County Rd 101 N, Plymouth 55447',hrs:'Call for food shelf appointment hours',url:'https://iocp.org/',langs:['English','Spanish'],urg:false,d:_WEST},

  henn_ridgedale:{name:'Hennepin County Ridgedale Service Center',tagline:'Apply for SNAP, cash assistance, health care, and other county programs. Minnetonka location.',phone:'612-596-1300',addr:'12601 Ridgedale Dr, Minnetonka 55305',hrs:'Monday through Thursday, 9am-4:30pm',url:'https://www.hennepin.us/en/residents/assistance',langs:['English','Spanish','Somali','Hmong'],urg:false,d:_WEST},

  /* ── SOUTH SUBURBS / DAKOTA COUNTY ────────────────────────────────
     Burnsville · Apple Valley · Eagan · Lakeville · Farmington · Rosemount
     Primary anchor: 360 Communities
     NOTE: 360 Communities stopped financial assistance Oct 1 2025 (state funding cuts)
  ─────────────────────────────────────────────────────────────────── */

  c360_bville:{name:'360 Communities - Burnsville Food Shelf',tagline:'Free SuperShelf grocery appointments in Burnsville. Housing navigation for tenants in eviction court. Legal kiosks on-site. NOTE: Financial rent/utility assistance ended October 2025 - for emergency cash help call Dakota County at 651-554-5611.',phone:'952-985-5300',addr:'501 E Hwy 13 Suite 112, Burnsville 55337',hrs:'Mon-Thu 9am-4pm, Fri 9am-1pm',url:'https://360communities.org/',langs:['English'],urg:false,d:_SOUTH},

  c360_rosemount:{name:'360 Communities - Rosemount Resource Center',tagline:'Free food shelf and family resource center serving Rosemount and surrounding south Dakota County. Same note: financial assistance ended October 2025. For emergency cash: Dakota County 651-554-5611.',phone:'651-322-5113',addr:'14521 Cimarron Ave W, Rosemount 55068',hrs:'Mon-Thu 8am-4pm, Tue evening 5-7pm',url:'https://360communities.org/',langs:['English'],urg:false,d:_SOUTH},

  dakota_hs:{name:'Dakota County Human Services',tagline:'Apply for SNAP, emergency assistance, cash assistance, and healthcare programs. Emergency Assistance available at mnbenefits.mn.gov or by calling. Housing Resource Line: 651-554-5751.',phone:'651-554-5611',addr:'Apply at mnbenefits.mn.gov or call',hrs:'Monday through Friday, 8am-4:30pm',url:'https://www.co.dakota.mn.us/HomeFamily/Assistance/Pages/default.aspx',langs:['English','Spanish','Somali','Hmong'],urg:false,d:_SOUTH},

  mission_outpost:{name:'Mission Outpost - South Dakota County Food Shelf',tagline:'Free food, clothing, linens, and household items by appointment. Serves Burnsville, Apple Valley, Lakeville, Eagan, Savage, Farmington, and Rosemount.',phone:'952-898-9311',addr:'13801 Fairview Dr, Burnsville 55337',hrs:'Call for appointment hours',url:'https://popmn.org/mission/mission-outpost',langs:['English'],urg:false,d:_SOUTH},

  isuroon:{name:'Isuroon - Halal Food and East African Services',tagline:'Halal food assistance and culturally specific services for the East African community in Dakota County. Free food, referrals, and community support. Burnsville.',phone:'952-595-5731',addr:'1103 W Burnsville Pkwy Suite 203, Burnsville 55337',hrs:'Call for current hours',url:'https://isuroon.org/halal-food-assistance',langs:['English','Somali'],urg:false,d:_SOUTH},

  cap_dakota:{name:'CAP - Energy Bill Help (Dakota County)',tagline:'Free help paying heating and energy bills through the LIHEAP program for qualifying households in Scott, Carver, and Dakota counties.',phone:'952-496-2125',addr:'Serves Scott, Carver, and Dakota counties - apply by phone',hrs:'Monday through Friday, business hours',url:'https://capscottcarver.org/',langs:['English'],urg:false,d:_SOUTH},

  legal_dakota:{name:'Legal Assistance of Dakota County',tagline:'Free legal help for low-income Dakota County residents. Housing, family, and civil cases. Legal kiosks at 360 Communities locations in Burnsville and Rosemount.',phone:'952-431-3200',addr:'Kiosks at 360 Communities Burnsville and Rosemount. Call for office appointments.',hrs:'Call for hours. Kiosks available during 360 Communities hours.',url:'https://www.legalaidmn.org/',langs:['English'],urg:false,d:_SOUTH}

};
