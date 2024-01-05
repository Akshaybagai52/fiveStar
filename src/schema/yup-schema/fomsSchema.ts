import * as Yup from 'yup';


//Safety Incident ***************************************************************


export const safetyIncidentSchema = Yup.object().shape({
  date_of_incident: Yup.string().required('Date of incident is required'),
  subcontractor: Yup.string().required('Subcontractor is required'),
  project_supervisor_mail: Yup.string(),
  street_address: Yup.string().required('Street address is required'),
  employee_name: Yup.array().required('Employee name is required').min(1, 'At least one employee name is required'),
  manager_name: Yup.string().required('Manager name is required'),
  supervisor_emails: Yup.string().email('Invalid email address').required('Supervisor emails are required'),
  describe_incident: Yup.string().required('Description of incident is required'),
  anyone_injured: Yup.string().required('Please specify if anyone was injured'),
  status_of_injury: Yup.object().shape({
    First_Aid_Injury: Yup.string(),
    Medical_Treatment: Yup.string(),
    Lost_time_Injury: Yup.string(),
    Minor_Near_Miss: Yup.string(),
    Significant_Near_Miss: Yup.string(),
  }),
  injured_persons: Yup.array().of(
    Yup.object().shape({
      injured_name_1: Yup.string().required('Injured person name is required'),
      occupation: Yup.string().required('Occupation is required'),
      fivestar_employee: Yup.string(),
      employee_address: Yup.string(),
      birth_of_employee: Yup.string(),
      employee_industry: Yup.string(),
    })
  ),
  investigation_commenced: Yup.string(),
  investigator_name: Yup.string().required('Investigator name is required'),
  measures_to_prevent: Yup.object().shape({
    Tool_box_was_held: Yup.string(),
    Referred_commettee: Yup.string(),
    Fss_management: Yup.string(),
    Work_method: Yup.string(),
    Signs_placed: Yup.string(),
    Hazard_removed: Yup.string(),
  }),
  measures_photos: Yup.string(),
  specify_measures: Yup.string(),
  your_name: Yup.string().required('Your name is required'),
  your_email: Yup.string().email('Invalid email address').required('Your email is required'),
  signature: Yup.string(),
  number: Yup.array().of(
    Yup.object().shape({
      // Add validation for properties inside the "number" array if needed
    })
  ),
  names: Yup.array().of(Yup.string()), 
});


//Transport Checklist ***************************************************************


export const transportChecklistSchema = Yup.object().shape({
  transportDetails: Yup.object().shape({
    transporter_name: Yup.string().required('Transporter name is required'),
  }),
  orderDetails: Yup.object().shape({
    orders_confirmed: Yup.string().required('Orders confirmed is required'),
    warehouse_team: Yup.string().required('Warehouse team is required'),
    Runsheet_warehouse: Yup.string().required('Runsheet warehouse is required'),
    drivers_fully_utilized: Yup.string().required('Drivers fully utilized is required'),
    managed_our_run_times: Yup.string().required('Managed our run times is required'),
  }),
  NextDayAllocation: Yup.object().shape({
    pick_Up_times: Yup.string().required('Pick up times is required'),
    correct_Delivery_Address: Yup.string().required('Correct delivery address is required'),
    pick_Up_Delivery: Yup.string().required('Pick up delivery is required'),
    drivers_next_day_jobs: Yup.string().required('Drivers next day jobs is required'),
    Zaya_regarding: Yup.string().required('Zaya regarding is required'),
    order_and_load: Yup.string().required('Order and load is required'),
  }),
  signature: Yup.string().required('Signature is required'),
  date: Yup.string().required('Date is required'),
});



//Reporting Unsafe ***************************************************************



export const reportingUnsafeSchema = Yup.object().shape({
  street_address: Yup.string().required('Street address is required'),
  project_supervisor_mail: Yup.string().email('Invalid email address'),
  nameOf_customer: Yup.string(),
  scaffolding_company: Yup.string(),

  fall_from_height: Yup.object().shape({
    Protection_builder: Yup.string(),
    Scaffold_missing: Yup.string(),
    Components_missing: Yup.string(),
    Scaffold_erection: Yup.string(),
  }),

  falling_objects: Yup.object().shape({
    Screening_missing: Yup.string(),
    Kickboard_missing: Yup.string(),
    Construction_stage: Yup.string(),
  }),

  strctural_integrity: Yup.object().shape({
    Bracing_missing: Yup.string(),
    Ties_missing: Yup.string(),
    Component_missing: Yup.string(),
    Mix_matched: Yup.string(),
    Equipment_condition: Yup.string(),
  }),

  recording: Yup.string(),

  your_name: Yup.string().required('Your name is required'),
  your_number: Yup.string(),
  your_email: Yup.string().email('Invalid email address'),
});


// Monthly Inspection ***************************************************************


export const monthlyInspectionSchema = Yup.object().shape({
  certificateRelation: Yup.string().required('CertificateRelation is required'),
  project_id: Yup.string().required('Project ID is required'),
  project_level: Yup.string(),
  nameOf_customer: Yup.string(),
  Customer_ABN: Yup.string(),
  inspection_notes: Yup.string(),
  Drawings_Supplied: Yup.string(),
  loadingCapacity: Yup.object().shape({
    LIGHT_225KG: Yup.string(),
    MEDIUM_450KG: Yup.string(),
    HEAVY_675KG: Yup.string(),
    SPECIAL_DUTY: Yup.string(),
  }),
  elevations: Yup.object().shape({
    East_Elevation: Yup.string(),
    West_Elevation: Yup.string(),
    North_Elevation: Yup.string(),
    South_Elevation: Yup.string(),
    Lift_Shaft: Yup.string(),
    Base: Yup.string(),
    Bird_Cage: Yup.string(),
    Roof: Yup.string(),
    Void: Yup.string(),
    Loading_Platform: Yup.string(),
    Whole_Level: Yup.string(),
    Whole_House: Yup.string(),
  }),
  Scaffold_length: Yup.string(),
  Bays_long: Yup.string(),
  Scaffold_Height: Yup.string(),
  Above_Base_Lift: Yup.string(),
  scaffoldChecklist: Yup.object().shape({
    inspected_area: Yup.string(),
    base_plate: Yup.string(),
    braces_installed: Yup.string(),
    end_braces: Yup.string(),
    kickboards_installed: Yup.string(),
    scaffold_level: Yup.string(),
    strecher_stair: Yup.string(),
    alloy_stair: Yup.string(),
    chain_shade: Yup.string(),
    ties_installed: Yup.string(),
    building_scaffold: Yup.string(),
    houesekeeping_area: Yup.string(),
    Rectification_description: Yup.string(),
  }),
  name_prepare_certificate: Yup.string().required('Name for certificate preparation is required'),
  date_time: Yup.string().required('Date and time is required'),
  email_receive_copy: Yup.string(),
  customers_mail: Yup.string(),
  HRWL_number: Yup.string(),
  customer_Representative: Yup.string().required('Customer representative is required'),
  signatureImages: Yup.string(),
  personSignature: Yup.string(),
  customerSignature: Yup.string(),
});



// Scaffold Tampering ***************************************************************



export const scaffoldTamperingSchema = Yup.object().shape({
  project_id: Yup.string().required('This is required Field'),
  date: Yup.string(),
  nameOf_customer: Yup.string(),
  unapproved_modification: Yup.string().required('This is required Field'),
  structural_integrity: Yup.string().required('This is required Field'),
  falling_objects: Yup.string().required('This is required Field'),
  general_access: Yup.string().required('This is required Field'),
  affacted_area: Yup.string().required('This is required Field'),
  repair_scaffold: Yup.string().required('This is required Field'),
  prevent_recurrence: Yup.string().required('This is required Field'),
  Supervisor_Name: Yup.string().required('This is required Field'),
  supervisor_emails: Yup.string().required('This is required Field'),
  customer_representative: Yup.string(),
  representative_email: Yup.string(),
  supervisorSignature: Yup.string(),
});


// Safety Toolbox Discussion ***************************************************************


export const safetyToolboxSchema = Yup.object().shape({
  projectDetails: Yup.object().shape({
    stageDiscussion: Yup.object().shape({
      Dismantle: Yup.string().required('Dismantle is required'),
      Existing_Scaffold: Yup.string().required(
        'Existing Scaffold is required',
      ),
    }),
    date: Yup.string().required('Date is required'),
    project_id: Yup.string().required('Project ID is required'),
    building_level: Yup.string(),
    nameOf_customer: Yup.string().required('Customer Name is required'),
    supervisor_name: Yup.string().required('Supervisor Name is required'),
    number_of_attendence: Yup.string().required(
      'Number of Attendance is required',
    ),
    start_time: Yup.string().required('Start Time is required'),
    finish_time: Yup.string().required('Finish Time is required'),
    duration: Yup.string().required('Duration is required'),
    work_description: Yup.string().required('Work Description is required'),
  }),
  supervisor_notes: Yup.string(),
  record: Yup.object().shape({
    name_1: Yup.string(),
    additional_cmt: Yup.string().required('Additional Comment is required'),
  }),
  signatures: Yup.object().shape({
    name_of_person: Yup.string().required('Name is required'),
    email_receive_copy: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    subcontractor_email: Yup.string()
      .email('Invalid email format')
      .required('Subcontractor Email is required'),
  }),
});


// Safety Toolbox Discussion ***************************************************************


export const handoverSchema = Yup.object({
  projectDetails: Yup.object().shape({
    projectId: Yup.string().required('Project ID is required'),
    buildingLevel: Yup.string(),
    nameOfBuilder: Yup.string(),
    customerABN: Yup.string(),
    workCompletion: Yup.string().required('Work completion is required'),
  }),
  signatures: Yup.object().shape({
    customerName: Yup.string().required('Name is required'),
    HRWLNumber: Yup.string(),
    customerEmail: Yup.string().email('Invalid email'),
    customerEmail2: Yup.string().email('Invalid email'),
    DateTime: Yup.string().required('Date and Time is required'),
    customerName2: Yup.string().required('Name is required'),
  }),
});



// Site Audit ***************************************************************



export const siteAuditSchema = Yup.object().shape({
  project_id: Yup.string().required('This is required Field'),
  date: Yup.string(),
  nameOf_customer: Yup.string(),
  unapproved_modification: Yup.string().required('This is required Field'),
  structural_integrity: Yup.string().required('This is required Field'),
  falling_objects: Yup.string().required('This is required Field'),
  general_access: Yup.string().required('This is required Field'),
  affacted_area: Yup.string().required('This is required Field'),
  repair_scaffold: Yup.string().required('This is required Field'),
  prevent_recurrence: Yup.string().required('This is required Field'),
  Supervisor_Name: Yup.string().required('This is required Field'),
  supervisor_emails: Yup.string().required('This is required Field'),
  customer_representative: Yup.string(),
  representative_email: Yup.string(),
  supervisorSignature: Yup.string(),
});



export const pickingChecklistSchema = Yup.object().shape({
  pickingDetails: Yup.object().shape({
    order: Yup.string().required('Order is required'),
    fss_number: Yup.string().required('FSS Number is required'),
    driver_load: Yup.string().required('Driver Load is required'),
    picking_date: Yup.string(),
    warehouse_person: Yup.string().required('Warehouse Person is required'),
  }),
  orderDetails: Yup.object().shape({
    picked_equipment: Yup.string().required('Picked Equipment is required'),
    notified_supervisor: Yup.string().required('Notified Supervisor is required'),
    staging_area: Yup.string().required('Staging Area is required'),
    strapped_labelled: Yup.string().required('Strapped and Labelled is required'),
    safe_travel: Yup.string().required('Safe Travel is required'),
  }),
  truckLoading: Yup.object().shape({
    allocated_correct_driver: Yup.string().required('Allocated Correct Driver is required'),
    loaded_pallets_safely: Yup.string().required('Loaded Pallets Safely is required'),
    manager_advised: Yup.string().required('Manager Advised is required'),
    comfortable_with_order: Yup.string().required('Comfortable with Order is required'),
    comments: Yup.string(),
  }),
});
