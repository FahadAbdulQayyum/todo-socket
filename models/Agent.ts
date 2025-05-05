import mongoose, { Schema, Document, Types } from 'mongoose';

// Interface for SubService
export interface ISubService {
    service_id: Types.ObjectId;
    title: string;
    price: number;
    description: string;
    iconImage: string;
    timing: number; // Duration in minutes
}

// Interface for Rating
export interface IRating {
    job_id: Types.ObjectId;
    rater_id: Types.ObjectId;
    rater_name: string;
    rater_lastName?: string;
    comment?: string;
    promptness: number;
    friendliness: number;
    serviceQuality: number;
    cleanliness?: number;
    raterPic?: string;
    raterPrivCount?: number;
    isAnonymous?: boolean;
    testString?: string;
    date?: number;
    createdAt?: Date;
    services?: string;
}

// Interface for Comment
export interface IComment {
    job_id: Types.ObjectId;
    commenter: Types.ObjectId;
    comment: string;
}

// Interface for Availability
export interface IAvailability {
    date: Date;
    color: string;
    halfHourColor: string;
    hour: number;
    unix_time_stamp: number;
    original_color_setting: { color: string; halfHourColor: string };
    job_id: Types.ObjectId;
    job: {
        scheduled_time: Date;
        addressString: string;
        location: { long: number; lat: number };
        timing: number;
        appt_status: string;
        services: string[];
    };
}

// Interface for Portfolio
export interface IPortfolio {
    url: string;
    service: Types.ObjectId;
    servString: string;
}

// Interface for GCM ID
export interface IGcmId {
    installationId: string;
    gcmId: string;
    gcmAppVersion: number;
}

// Main Agent Interface
export interface IAgent extends Document {
    SFID?: string;
    litmosId?: string;
    firstName: string;
    lastName: string;
    email: string;
    hashed_password: string;
    salt: string;
    password?: string;
    profile: string;
    gcmIds: IGcmId[];
    profilePicture: string;
    phoneNumber: string;
    deviceToken?: string;
    balanced_customer_uri?: string;
    background_check_status?: string;
    background_check_date?: string;
    bank_accounts?: any[]; // Replace `any` with a proper type if available
    variationPricing?: Record<string, number>;
    services: Types.ObjectId[];
    services1?: any[]; // Replace `any` with a proper type if available
    subServices: ISubService[];
    ratings: IRating[];
    ratingCount: number;
    comments: IComment[];
    currentLocation?: { long: number; lat: number };
    activeJob?: Types.ObjectId;
    referredBy?: Types.ObjectId;
    hasTriggeredReferralReward?: boolean;
    appointments?: any[]; // Replace `any` with a proper type if available
    celebrityStylist?: boolean;
    onDuty?: boolean;
    commission?: number;
    serviceVariationList?: any[]; // Replace `any` with a proper type if available
    currentLitmosLesson?: string;
    address?: string;
    addressObject?: any; // Replace `any` with a proper type if available
    changesPending?: any; // Replace `any` with a proper type if available
    gender?: string;
    dateOfBirth?: string;
    avgRating: number;
    avgFriendlinessRating: number;
    avgPromptnessRating: number;
    avgServiceQualityRating: number;
    allowedTier: number;
    rankingPoints: number;
    globalRank: number;
    cityRanks?: Record<string, number>;
    regionRanks?: Record<string, number>;
    serviceRanks?: Record<string, number>;
    serviceInRegionRanks?: Record<string, number>;
    photos?: string[];
    portfolio: IPortfolio[];
    availability: IAvailability[];
    isNearestAvailablePro?: boolean;
    subscribers?: any[]; // Replace `any` with a proper type if available
    timeZone?: number;
    cities: Types.ObjectId[];
    lockedCities?: Types.ObjectId[];
    regions?: Types.ObjectId[];
    salesforce_id?: string;
    city_id?: Types.ObjectId;
    platform_partner_id?: Types.ObjectId;
    city_name?: string;
    active?: boolean;
    disabled?: boolean;
    nextAvailableAppointment?: Date;
    temp_pw?: string;
    hasHyperwalletAccount?: boolean;
    paidBackground?: boolean;
    stripe_user_id?: string;
    stripe_access_token?: string;
    stripe_refresh_token?: string;
    stripe_publishable_key?: string;
    lastUpdatedSF?: Date;
    lastSchedUpdate?: number;
    jobRequests?: number;
    jobConfirms?: number;
    lastDeletedCity?: string;
    topTierAccess?: boolean;
    isTopTier?: boolean;
    videoInterviewPassed?: boolean;
    created_at: Date;
    modifiedAt: Date;
    tomorrowBookingOnly?: boolean;
    hasNewApp?: boolean;
}


// Define the Agent schema
const agentSchema = new Schema<IAgent>(
    {
        SFID: String,
        litmosId: String,
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        hashed_password: { type: String, default: '' },
        salt: { type: String, default: '' },
        password: String,
        profile: { type: String, default: '-' },
        gcmIds: [new Schema<IGcmId>({
            installationId: String,
            gcmId: String,
            gcmAppVersion: Number,
        })],
        profilePicture: { type: String, default: 'https://s3-us-west-2.amazonaws.com/priv-agent-photos/logo_circle.jpg' },
        phoneNumber: String,
        deviceToken: String,
        balanced_customer_uri: String,
        background_check_status: String,
        background_check_date: String,
        bank_accounts: [Schema.Types.Mixed], // Use `Schema.Types.Mixed` for flexibility
        variationPricing: Object,
        services: [{ type: Schema.Types.ObjectId, ref: 'Service', index: true }],
        services1: [Schema.Types.Mixed],
        subServices: [new Schema<ISubService>({
            service_id: { type: Schema.Types.ObjectId, ref: 'Service' },
            title: String,
            price: Number,
            description: String,
            iconImage: String,
            timing: Number,
        })],
        ratings: [new Schema<IRating>({
            job_id: { type: Schema.Types.ObjectId, ref: 'Job' },
            rater_id: { type: Schema.Types.ObjectId, ref: 'Agent' },
            rater_name: String,
            rater_lastName: String,
            comment: String,
            promptness: Number,
            friendliness: Number,
            serviceQuality: Number,
            cleanliness: Number,
            raterPic: String,
            raterPrivCount: { type: Number, default: 1 },
            isAnonymous: Boolean,
            testString: String,
            date: Number,
            createdAt: Date,
            services: String,
        })],
        ratingCount: { type: Number, default: 0 },
        comments: [new Schema<IComment>({
            job_id: { type: Schema.Types.ObjectId, ref: 'Job' },
            commenter: { type: Schema.Types.ObjectId, ref: 'User' },
            comment: String,
        })],
        currentLocation: { long: Number, lat: Number },
        activeJob: { type: Schema.Types.ObjectId, ref: 'Job', index: true },
        referredBy: { type: Schema.Types.ObjectId, ref: 'Agent', index: true },
        hasTriggeredReferralReward: { type: Boolean, default: false },
        appointments: [Schema.Types.Mixed],
        celebrityStylist: { type: Boolean, default: false },
        onDuty: { type: Boolean, default: true },
        commission: { type: Number, default: 80 },
        serviceVariationList: [Schema.Types.Mixed],
        currentLitmosLesson: String,
        address: String,
        addressObject: Object,
        changesPending: Object,
        gender: String,
        dateOfBirth: String,
        avgRating: { type: Number, default: 5 },
        avgFriendlinessRating: { type: Number, default: 5 },
        avgPromptnessRating: { type: Number, default: 5 },
        avgServiceQualityRating: { type: Number, default: 5 },
        allowedTier: { type: Number, default: 1 },
        rankingPoints: { type: Number, default: 0, index: true },
        globalRank: { type: Number, default: 999, index: true },
        cityRanks: Object,
        regionRanks: Object,
        serviceRanks: Object,
        serviceInRegionRanks: Object,
        photos: [String],
        portfolio: [new Schema<IPortfolio>({
            url: { type: String, default: '' },
            service: { type: Schema.Types.ObjectId, ref: 'Service', index: true },
            servString: { type: String, default: '' },
        })],
        availability: [new Schema<IAvailability>({
            date: Date,
            color: String,
            halfHourColor: String,
            hour: Number,
            unix_time_stamp: Number,
            original_color_setting: { color: String, halfHourColor: String },
            job_id: { type: Schema.Types.ObjectId, ref: 'Job' },
            job: {
                scheduled_time: Date,
                addressString: String,
                location: { long: Number, lat: Number },
                timing: Number,
                appt_status: String,
                services: [String],
            },
        })],
        isNearestAvailablePro: { type: Boolean, default: false },
        subscribers: [Schema.Types.Mixed],
        timeZone: { type: Number, default: 4 },
        cities: [{ type: Schema.Types.ObjectId, ref: 'City', index: true }],
        lockedCities: [{ type: Schema.Types.ObjectId, ref: 'City', index: true }],
        regions: [{ type: Schema.Types.ObjectId, ref: 'Region' }],
        salesforce_id: { type: String, index: true },
        city_id: { type: Schema.Types.ObjectId, ref: 'City', index: true },
        platform_partner_id: { type: Schema.Types.ObjectId, ref: 'PlatformPartner', index: true },
        city_name: String,
        active: { type: Boolean, default: false },
        disabled: { type: Boolean, default: true },
        nextAvailableAppointment: Date,
        temp_pw: String,
        hasHyperwalletAccount: { type: Boolean, default: false },
        paidBackground: Boolean,
        stripe_user_id: String,
        stripe_access_token: String,
        stripe_refresh_token: String,
        stripe_publishable_key: String,
        lastUpdatedSF: Date,
        lastSchedUpdate: Number,
        jobRequests: { type: Number, default: 0 },
        jobConfirms: { type: Number, default: 0 },
        lastDeletedCity: String,
        topTierAccess: Boolean,
        isTopTier: Boolean,
        videoInterviewPassed: { type: Boolean, default: false },
        created_at: { type: Date, default: Date.now },
        modifiedAt: { type: Date, default: Date.now },
        tomorrowBookingOnly: { type: Boolean, default: false },
        hasNewApp: { type: Boolean, default: false },
    },
    { strict: false, timestamps: { updatedAt: 'modifiedAt' } }
);

// Indexes
agentSchema.index({ currentLocation: '2d' });
agentSchema.index({ rankingPoints: 1, cities: 1 });
agentSchema.index({ active: 1, cities: 1 });

// Virtual for full name
agentSchema.virtual('name').get(function () {
    return `${this.firstName} ${this.lastName}`;
});

// Ensure virtuals are included in JSON output
agentSchema.set('toJSON', { getters: true, virtuals: true });

// Export the Agent model
const Agent = mongoose.models.Agent || mongoose.model<IAgent>('Agent', agentSchema);
export default Agent;