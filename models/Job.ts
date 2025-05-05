import mongoose from 'mongoose';

// Define the schema for nested objects
const GeoLocationSchema = new mongoose.Schema({
  lat: { type: Number, default: 0 },
  long: { type: Number, default: 0 },
});

const ServiceVariationSchema = new mongoose.Schema({
  price: { type: Number, required: true },
  name: { type: String, required: true },
});

const ServiceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  serviceID: { type: String, required: true },
  iconImage: { type: String, default: null },
  replacementName: { type: String, default: null },
  selectedVariation: {
    prices: [Number],
    name: { type: String, required: true },
  },
  timing: { type: Number, default: null },
  priceForJob: { type: Number, default: null },
  selectedServiceVariation: ServiceVariationSchema,
});

const AddressSchema = new mongoose.Schema({
  street1: { type: String, default: null },
  street2: { type: String, default: '' },
  addressString: { type: String, default: null },
  ID: { type: String, default: null },
  geoLocation: GeoLocationSchema,
  zipCode: { type: String, default: null },
  state: { type: String, default: null },
  city: { type: String, default: null },
});

const AgentSchema = new mongoose.Schema({
  lastName: { type: String, required: true },
  profilePicture: { type: String, default: null },
  firstName: { type: String, required: true },
  email: { type: String, required: true },
  currentLocation: GeoLocationSchema,
  _id: { type: String, required: true },
});

// Main Job Schema
const JobSchema = new mongoose.Schema(
  {
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    created_at: { type: Date, default: Date.now },
    agent: AgentSchema,
    client_received_comment: { type: Boolean, default: false },
    ratings: [{ type: mongoose.Schema.Types.Mixed }],
    promotionCode: { type: String, default: null },
    External_ID: { type: String, required: true },
    IsDeleted: { type: Boolean, default: false },
    lastUpdatedSF: { type: Date, default: null },
    closedToAgent: { type: Boolean, default: false },
    LastActivityDate: { type: Date, default: null },
    timing: { type: Number, default: 0 },
    LastReferencedDate: { type: Date, default: null },
    LastModifiedById: { type: String, default: null },
    accept_time: { type: Date, default: null },
    createdAt: { type: Date, default: Date.now },
    free_service_ids: [{ type: String }],
    hasBeenAssigned: { type: Boolean, default: false },
    isBridal: { type: Boolean, default: false },
    isSpecialEventJob: { type: Boolean, default: false },
    isUpsellJob: { type: Boolean, default: false },
    message_for_agent: { type: String, default: null },
    messages: [{ type: mongoose.Schema.Types.Mixed }],
    modifiedAt: { type: Date, default: Date.now },
    money_payed_to_agent: { type: Boolean, default: false },
    pings: [{ type: mongoose.Schema.Types.Mixed }],
    priceAddOns: [{ type: mongoose.Schema.Types.Mixed }],
    travel_fee: { type: Number, default: null },
    LastViewedDate: { type: Date, default: null },
    timeZone: { type: Number, default: 0 },
    __v: { type: Number, default: 0 },
    request_time: { type: Date, default: null },
    LastModifiedDate: { type: Date, default: null },
    Services: { type: String, default: null },
    transportationType: { type: String, default: null },
    region_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Region' },
    price: { type: Number, default: 0 },
    services: [ServiceSchema],
    state: { type: String, default: 'pending' },
    city_name: { type: String, default: null },
    scheduled_time: { type: Date, default: null },
    Name: { type: String, required: true },
    CreatedById: { type: String, default: null },
    shotGunJobTaken: { type: Boolean, default: false },
    address: AddressSchema,
    reviewing_agents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Agent' }],
    salesTax: { type: Number, default: 0 },
    serviceVariationsAddOn: [{ type: mongoose.Schema.Types.Mixed }],
    shotGunRejects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Agent' }],
    shotGunnedAgents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Agent' }],
    test: { type: Boolean, default: false },
    travelFee: { type: Number, default: 0 },
    userCancelCharge: { type: Number, default: 0 },
    wasRegularJob: { type: Boolean, default: false },
    was_cancelled_by_agent: { type: Boolean, default: false },
    was_cancelled_by_client: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// Check if the model already exists before defining it
const Job = mongoose.models.Job || mongoose.model('Job', JobSchema);

export default Job;









// const mongoose = require('mongoose');

// // Define the schema for nested objects
// const GeoLocationSchema = new mongoose.Schema({
//   lat: { type: Number, default: 0 },
//   long: { type: Number, default: 0 },
// });

// const AddressSchema = new mongoose.Schema({
//   street1: { type: String, default: null },
//   street2: { type: String, default: '' },
//   addressString: { type: String, default: null },
//   ID: { type: String, default: null },
//   geoLocation: GeoLocationSchema,
//   zipCode: { type: String, default: null },
//   state: { type: String, default: null },
//   city: { type: String, default: null },
// });

// const AgentSchema = new mongoose.Schema({
//   lastName: { type: String, required: true },
//   profilePicture: { type: String, default: null },
//   firstName: { type: String, required: true },
//   email: { type: String, required: true },
//   currentLocation: GeoLocationSchema,
//   _id: { type: String, required: true },
// });

// const ClientSchema = new mongoose.Schema({
//   lastName: { type: String, required: true },
//   userID: { type: String, required: true },
//   phoneNumber: { type: String, default: null },
//   password: { type: String, default: null },
//   firstName: { type: String, required: true },
//   profilePicture: { type: String, default: null },
//   email: { type: String, required: true },
//   facebookID: { type: String, default: null },
// });

// const ServiceVariationSchema = new mongoose.Schema({
//   price: { type: Number, required: true },
//   name: { type: String, required: true },
// });

// const ServiceSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   serviceID: { type: String, required: true },
//   iconImage: { type: String, default: null },
//   replacementName: { type: String, default: null },
//   selectedVariation: {
//     prices: [Number],
//     name: { type: String, required: true },
//   },
//   timing: { type: Number, default: null },
//   priceForJob: { type: Number, default: null },
//   selectedServiceVariation: ServiceVariationSchema,
// });

// const EventSchema = new mongoose.Schema({
//   time: { type: Date, default: null },
//   event: { type: String, required: true },
// });

// // Main Job Schema
// const JobSchema = new mongoose.Schema(
//   {
//     _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
//     created_at: { type: Date, default: Date.now },
//     agent: AgentSchema,
//     client_received_comment: { type: Boolean, default: false },
//     ratings: [{ type: mongoose.Schema.Types.Mixed }],
//     promotionCode: { type: String, default: null },
//     External_ID: { type: String, required: true },
//     IsDeleted: { type: Boolean, default: false },
//     lastUpdatedSF: { type: Date, default: null },
//     closedToAgent: { type: Boolean, default: false },
//     LastActivityDate: { type: Date, default: null },
//     travel_fee: { type: Number, default: null },
//     LastViewedDate: { type: Date, default: null },
//     timeZone: { type: Number, default: 0 },
//     __v: { type: Number, default: 0 },
//     request_time: { type: Date, default: null },
//     LastModifiedDate: { type: Date, default: null },
//     Services: { type: String, default: null },
//     transportationType: { type: String, default: null },
//     region_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Region' },
//     price: { type: Number, default: 0 },
//     services: [ServiceSchema],
//     state: { type: String, default: 'pending' },
//     city_name: { type: String, default: null },
//     scheduled_time: { type: Date, default: null },
//     Name: { type: String, required: true },
//     CreatedById: { type: String, default: null },
//     shotGunJobTaken: { type: Boolean, default: false },
//     address: AddressSchema,
//     agent_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Agent' },
//     client_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Client' },
//     closedToClient: { type: Boolean, default: false },
//     events: [EventSchema],
//     SFID: { type: String, default: null },
//     Currency: { type: String, default: null },
//     CreatedDate: { type: Date, default: null },
//     agent_is_done: { type: Boolean, default: false },
//     agent_received_comment: { type: Boolean, default: false },
//     money_charged: { type: Boolean, default: false },
//     SystemModstamp: { type: Date, default: null },
//     end_time: { type: Date, default: null },
//     Id: { type: String, required: true },
//     client: ClientSchema,
//     shotGunJob: { type: Boolean, default: false },
//     time_type: { type: String, default: null },
//     five_min_alert: { type: Boolean, default: false },
//     timing: { type: Number, default: 0 },
//     LastReferencedDate: { type: Date, default: null },
//     LastModifiedById: { type: String, default: null },
//     accept_time: { type: Date, default: null },
//     createdAt: { type: Date, default: Date.now },
//     free_service_ids: [{ type: String }],
//     hasBeenAssigned: { type: Boolean, default: false },
//     isBridal: { type: Boolean, default: false },
//     isSpecialEventJob: { type: Boolean, default: false },
//     isUpsellJob: { type: Boolean, default: false },
//     message_for_agent: { type: String, default: null },
//     messages: [{ type: mongoose.Schema.Types.Mixed }],
//     modifiedAt: { type: Date, default: Date.now },
//     money_payed_to_agent: { type: Boolean, default: false },
//     pings: [{ type: mongoose.Schema.Types.Mixed }],
//     priceAddOns: [{ type: mongoose.Schema.Types.Mixed }],
//     reviewing_agents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Agent' }],
//     salesTax: { type: Number, default: 0 },
//     serviceVariationsAddOn: [{ type: mongoose.Schema.Types.Mixed }],
//     shotGunRejects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Agent' }],
//     shotGunnedAgents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Agent' }],
//     test: { type: Boolean, default: false },
//     travelFee: { type: Number, default: 0 },
//     userCancelCharge: { type: Number, default: 0 },
//     wasRegularJob: { type: Boolean, default: false },
//     was_cancelled_by_agent: { type: Boolean, default: false },
//     was_cancelled_by_client: { type: Boolean, default: false },
//   },
//   { timestamps: true }
// );

// // Create the Job model
// const Job = mongoose.model('Job', JobSchema);

// // module.exports = Job;
// export default Job;


















// // import mongoose from "mongoose";

// // const jobSchema = new mongoose.Schema({
// //     // Core Job Information
// //     SFID: String,
// //     request_time: Number,
// //     accept_time: Date,
// //     scheduled_time: Date,
// //     end_time: Date,
// //     affiliate_id: String,
// //     address: Object,
// //     location: { long: Number, lat: Number },
// //     state: String,
// //     client: Object,
// //     agent: Object,

// //     // Financial Details
// //     travelFee: { type: Number, default: 0 },
// //     parkingFee: { type: Number, default: 0 },
// //     lateFee: { type: Number, default: 0 },
// //     price: Number,
// //     salesTax: { type: Number, default: 0 },
// //     localTaxCharged: Number,
// //     agent_paid_price: Number,
// //     serviceTip: Number,
// //     credits_used: Number,
// //     giftCreditsUsed: Number,
// //     priceAddOns: Array,
// //     serviceAddOn: Boolean,

// //     // Services and Variations
// //     services: Array,
// //     serviceVariationsAddOn: Array,
// //     selectedServiceVariations: Array,

// //     // Ratings and Feedback
// //     ratings: Array,
// //     messages: Array,
// //     client_received_comment: { type: Boolean, default: false },
// //     agent_received_comment: { type: Boolean, default: false },

// //     // Agent and Client References
// //     agent_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Agent', index: true },
// //     client_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', index: true },
// //     requested_agent_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Agent', index: true },

// //     // Job Status and Flags
// //     time_type: String, // Differentiate between 'instant' and 'appointment' jobs
// //     transportationType: String,
// //     five_min_alert: { type: Boolean, default: false },
// //     promotionCode: String,
// //     timeZone: { type: Number, default: 4 },
// //     shotGunJob: { type: Boolean, default: false },
// //     wasRegularJob: { type: Boolean, default: false },
// //     shotGunnedAgents: Array,
// //     shotGunRejects: Array,
// //     shotGunJobTaken: { type: Boolean, default: false },
// //     specialInstructions: String,
// //     cancelReason: { type: String, cancelReason: "" },
// //     was_cancelled_by_agent: { type: Boolean, default: false },
// //     was_cancelled_by_client: { type: Boolean, default: false },
// //     userCancelCharge: { type: Number, default: 0 },

// //     // Geographical and Regional Data
// //     region_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Region', index: true },
// //     city_id: { type: mongoose.Schema.Types.ObjectId, ref: 'City', index: true },
// //     city_name: String,

// //     // Metadata and Timestamps
// //     test: { type: Boolean, default: false },
// //     lastUpdated: Date,
// //     lastUpdatedSF: Date,
// //     createdAt: { type: Date, default: Date.now },
// //     modifiedAt: { type: Date, default: Date.now, index: true },
// //     updatedAt: { type: Date, default: Date.now, index: true },
// // }, { strict: false, timestamps: { updatedAt: "modifiedAt" } });

// // const Job = mongoose.model('Job', jobSchema);
// // export default Job;