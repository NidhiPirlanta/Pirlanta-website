"""Assessment questions and configuration."""

ASSESSMENT_QUESTIONS = {
    1: {
        "title": "hello! {name}, please fill out your details",
        "fields": [
            {"key": "company_name", "label": "company name", "type": "text", "placeholder": "company name", "required": True},
            {"key": "role", "label": "select role", "type": "dropdown", "placeholder": "select role", "required": True, "options": [
                {"value": "owner", "label": "Owner"}, {"value": "manager", "label": "Manager"},
                {"value": "director", "label": "Director"}, {"value": "executive", "label": "Executive"},
                {"value": "other", "label": "Other"}
            ]},
            {"key": "industry", "label": "industry", "type": "dropdown", "placeholder": "industry", "required": True, "options": [
                {"value": "it", "label": "IT/Software"}, {"value": "finance", "label": "Finance"},
                {"value": "healthcare", "label": "Healthcare"}, {"value": "retail", "label": "Retail"},
                {"value": "manufacturing", "label": "Manufacturing"}, {"value": "other", "label": "Other"}
            ]},
            {"key": "core_business", "label": "core business", "type": "dropdown", "placeholder": "core business", "required": True, "options": [
                {"value": "b2b", "label": "B2B"}, {"value": "b2c", "label": "B2C"},
                {"value": "both", "label": "Both"}, {"value": "other", "label": "Other"}
            ]},
            {"key": "turnover", "label": "indicative turnover (inr)", "type": "dropdown", "placeholder": "indicative turnover", "required": True, "options": [
                {"value": "0-10", "label": "Under 10 Lakhs"}, {"value": "10-50", "label": "10 Lakhs - 50 Lakhs"},
                {"value": "50-100", "label": "50 Lakhs - 1 Crore"}, {"value": "1-10", "label": "1 Crore - 10 Crore"},
                {"value": "10+", "label": "Above 10 Crore"}
            ]},
            {"key": "pincode", "label": "pincode", "type": "text", "placeholder": "pincode", "required": True, "detectLocation": True},
            {"key": "employees", "label": "number of employees", "type": "dropdown", "placeholder": "number of employees", "required": True, "options": [
                {"value": "1-10", "label": "1-10"}, {"value": "11-50", "label": "11-50"},
                {"value": "51-100", "label": "51-100"}, {"value": "101-500", "label": "101-500"},
                {"value": "500+", "label": "500+"}
            ]},
            {"key": "office_locations", "label": "no. of office locations", "type": "dropdown", "placeholder": "No. of office locations", "required": True, "options": [
                {"value": "1", "label": "1"}, {"value": "2-5", "label": "2-5"},
                {"value": "6-10", "label": "6-10"}, {"value": "10+", "label": "10+"}
            ]},
            {"key": "age", "label": "select age", "type": "dropdown", "placeholder": "select age", "required": True, "options": [
                {"value": "18-25", "label": "18-25"}, {"value": "26-35", "label": "26-35"},
                {"value": "36-45", "label": "36-45"}, {"value": "46-55", "label": "46-55"},
                {"value": "55+", "label": "55+"}
            ]},
            {"key": "gender", "label": "select gender", "type": "dropdown", "placeholder": "select gender", "required": True, "options": [
                {"value": "male", "label": "Male"}, {"value": "female", "label": "Female"},
                {"value": "other", "label": "Other"}, {"value": "prefer_not", "label": "Prefer not to say"}
            ]},
        ],
    },
    2: {
        "title": "let's understand your digital strategy & management style...",
        "questions": [
            {"key": "digital_priorities", "text": "What are the top digital priorities for your business in the present year? *", "type": "checkbox", "required": True, "options": [
                {"value": "channels", "label": "Digitalizing channels of acquiring and engaging customers"},
                {"value": "operations", "label": "Digitalizing business operations, processes and technical infrastructure"},
                {"value": "office", "label": "Digitalizing office operations to improve employee productivity"},
                {"value": "none", "label": "None of the above"}
            ]},
            {"key": "ai_ml_usage", "text": "Do you use AI or ML in any of your business processes? *", "type": "radio", "required": True, "options": [
                {"value": "no_plans", "label": "No plans"},
                {"value": "planning", "label": "In planning"},
                {"value": "implementation", "label": "In implementation"},
                {"value": "adopted", "label": "Already adopted"}
            ]},
            {"key": "ai_ml_processes", "text": "In which of the processes do you use AI or ML in your organization? *", "type": "checkbox", "required": True, "options": [
                {"value": "customer", "label": "In customer acquisition, engagement and servicing"},
                {"value": "operations", "label": "In business operations and process optimization/automation"},
                {"value": "productivity", "label": "To enhance workplace productivity and collaboration"},
                {"value": "others", "label": "Others", "hasOther": True}
            ]},
            {"key": "selling_channels", "text": "Which channels do you use for selling your products & services? *", "type": "checkbox", "required": True, "options": [
                {"value": "offline", "label": "Offline channels"},
                {"value": "mobile", "label": "Mobile applications"},
                {"value": "website", "label": "Own website"},
                {"value": "ecommerce", "label": "Other e-commerce platforms"},
                {"value": "social", "label": "Social media marketplace"},
                {"value": "whatsapp", "label": "WhatsApp Business"}
            ]},
            {"key": "it_network", "text": "How is your IT Network setup managed? *", "type": "dropdown", "required": True, "options": [
                {"value": "in_house", "label": "In-house"}, {"value": "managed", "label": "Managed service provider"},
                {"value": "hybrid", "label": "Hybrid"}, {"value": "outsourced", "label": "Fully outsourced"}
            ]},
            {"key": "training_frequency", "text": "How often is training provided for your employees to improve their digital skills? *", "type": "radio", "required": True, "options": [
                {"value": "never", "label": "Never"},
                {"value": "rarely", "label": "Rarely"},
                {"value": "sometimes", "label": "Sometimes"},
                {"value": "regularly", "label": "Regularly"}
            ]},
        ],
    },
    3: {
        "title": "tell us about your company's digital operations...",
        "questions": [
            {"key": "internet_connectivity", "text": "What types of internet connectivity are available across your office locations? *", "hint": "(You can select more than one option)", "type": "checkbox", "required": True, "options": [
                {"value": "ill", "label": "Internet Leased Lines (ILL)"},
                {"value": "sdwan", "label": "Hybrid SD-WAN"},
                {"value": "wifi", "label": "Enterprise Wi-Fi"},
                {"value": "broadband", "label": "Broadband"},
                {"value": "none", "label": "None of the above"}
            ]},
            {"key": "secure_email", "text": "What is the usage status of the following digital security measure to protect your business? *", "sub_question": "Secure Email Communication *", "type": "radio", "required": True, "options": [
                {"value": "no_plans", "label": "No plans"},
                {"value": "planned", "label": "Being planned"},
                {"value": "implementing", "label": "Being implemented"},
                {"value": "in_use", "label": "Already in use"}
            ]},
            {"key": "secure_browsing", "text": "Secure Internet Browsing Activity *", "type": "radio", "required": True, "options": [
                {"value": "no_plans", "label": "No plans"},
                {"value": "planned", "label": "Being planned"},
                {"value": "implementing", "label": "Being implemented"},
                {"value": "in_use", "label": "Already in use"}
            ]},
            {"key": "cloud_firewall", "text": "Cloud Firewall *", "type": "radio", "required": True, "options": [
                {"value": "no_plans", "label": "No plans"},
                {"value": "planned", "label": "Being planned"},
                {"value": "implementing", "label": "Being implemented"},
                {"value": "in_use", "label": "Already in use"}
            ]},
            {"key": "onprem_firewall", "text": "Managed On Premise Firewall *", "type": "radio", "required": True, "options": [
                {"value": "no_plans", "label": "No plans"},
                {"value": "planned", "label": "Being planned"},
                {"value": "implementing", "label": "Being implemented"},
                {"value": "in_use", "label": "Already in use"}
            ]},
            {"key": "iot_usage", "text": "Do you use IoT (Internet of Things) in your business operations? *", "hint": "(IoT connects everyday devices to the internet, enabling smarter functions such as tracking and monitoring assets like machinery, inventory, and personnel across warehouses, shops, and plants)", "type": "dropdown", "required": True, "options": [
                {"value": "no", "label": "No"},
                {"value": "planning", "label": "Planning to use"},
                {"value": "limited", "label": "Limited use"},
                {"value": "extensive", "label": "Extensive use"}
            ]},
        ],
    },
    4: {
        "title": "let's know more about your company's digital workspace...",
        "questions": [
            {"key": "communication_channels", "text": "What communication channels do you use to make sure your team can always communicate digitally? *", "hint": "(You can select more than one option)", "type": "checkbox", "required": True, "options": [
                {"value": "intranet", "label": "Corporate intranet platform (workplace)"},
                {"value": "email", "label": "Emails"},
                {"value": "whatsapp", "label": "WhatsApp Business account"},
                {"value": "mobile", "label": "Company-paid mobile postpaid connections"}
            ]},
            {"key": "google_workspace", "text": "Do you use any of the following employee productivity and automation application? *", "sub_question": "Google Workspace *", "type": "radio", "required": True, "options": [
                {"value": "no_plans", "label": "No plans"},
                {"value": "planned", "label": "Being planned"},
                {"value": "implementing", "label": "Being implemented"},
                {"value": "in_use", "label": "Already in use"}
            ]},
            {"key": "hrms", "text": "HRMS For Automating HR Processes *", "type": "radio", "required": True, "options": [
                {"value": "no_plans", "label": "No plans"},
                {"value": "planned", "label": "Being planned"},
                {"value": "implementing", "label": "Being implemented"},
                {"value": "in_use", "label": "Already in use"}
            ]},
            {"key": "microsoft_365", "text": "Microsoft 365 *", "type": "radio", "required": True, "options": [
                {"value": "no_plans", "label": "No plans"},
                {"value": "planned", "label": "Being planned"},
                {"value": "implementing", "label": "Being implemented"},
                {"value": "in_use", "label": "Already in use"}
            ]},
        ],
    },
}

READY_FOR_NEXT_BENEFITS = [
    {"icon": "rocket", "text": "Accelerated Recovery For Mission-Critical Systems."},
    {"icon": "dollar", "text": "Lower Costs With Modern Infrastructure And Automation."},
    {"icon": "cloud", "text": "Audit-Ready Compliance Across Hybrid Cloud Environments."},
    {"icon": "growth", "text": "Scalable Solutions To Support Business Innovation And Growth."},
    {"icon": "shield", "text": "Enhanced Security Posture Aligned With Global Resilience Standards."},
]
