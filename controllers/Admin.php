<?php

class Admin extends Controller{

    function __construct(){
        parent:: __construct();
    }
    //admin profile page
    function index(){
        if(isset($_SESSION['job_title'])){
            if($_SESSION['job_title']=='Admin'){
                $this->view->render('Admin/profile');
            }
        }
        else{
            $this->view->render('error');
        }
    }
    //Admins income and expenses page
    function incomeExpenses(){
        if(isset($_SESSION['job_title'])){
            if($_SESSION['job_title']=='Admin'){
                $this->view->render('Admin/income&Expenses');
            }
        }
        else{
            $this->view->render('error');
        }
        
    }

    
    // student details for admin
    function AdminStudentDetails(){
        if(isset($_SESSION['job_title'])){
            if($_SESSION['job_title']=='Admin'||$_SESSION['job_title']=='Manager'){
                $this->view->render('Admin/AdminStudentDetails');
            }
        }
        else{
            $this->view->render('error');
        }
        
    }
//report start

    function reports(){
        if(isset($_SESSION['job_title'])){
            if($_SESSION['job_title']=='Admin'||$_SESSION['job_title']=='Manager'){
                $this->view->render('Report/reports');
            }
        }
        else{
            $this->view->render('error');
        }
        
    }

    //attendance 
    function attendence_sessions(){
        if(isset($_SESSION['job_title'])){
            if($_SESSION['job_title']=='Admin'||$_SESSION['job_title']=='Manager'){
                $this->view->render('Report/attendence_sessions');
            }
        }
        else{
            $this->view->render('error');
        }
        
    }
    //graphic
    function conductorGraphic(){
        if(isset($_SESSION['job_title'])){
            if($_SESSION['job_title']=='Admin'||$_SESSION['job_title']=='Manager'){
                $this->view->render('Report/conductorGraphic');
            }
        }
        else{
            $this->view->render('error');
        }
        
    }
    //
    function customerGraphic(){
        if(isset($_SESSION['job_title'])){
            if($_SESSION['job_title']=='Admin'||$_SESSION['job_title']=='Manager'){
                $this->view->render('Report/customerGraphic');
            }
        }
        else{
            $this->view->render('error');
        }
        
    }
    //
    function exam_participation(){
        if(isset($_SESSION['job_title'])){
            if($_SESSION['job_title']=='Admin'||$_SESSION['job_title']=='Manager'){
                $this->view->render('Report/exam_participation');
            }
        }
        else{
            $this->view->render('error');
        }
        
    }
    //
    function sessionGraph(){
        if(isset($_SESSION['job_title'])){
            if($_SESSION['job_title']=='Admin'||$_SESSION['job_title']=='Manager'){
                $this->view->render('Report/sessionGraph');
            }
        }
        else{
            $this->view->render('error');
        }
        
    }
    // 
    //newly add
    function attendanceSession(){
        if(isset($_SESSION['job_title'])){
            if($_SESSION['job_title']=='Admin'||$_SESSION['job_title']=='Manager'){
                $this->view->render('Report/attendanceSession');
            }
        }
        else{
            $this->view->render('error');
        }
        
    }
    //
    function attendanceStudent(){
        if(isset($_SESSION['job_title'])){
            if($_SESSION['job_title']=='Admin'||$_SESSION['job_title']=='Manager'){
                $this->view->render('Report/attendanceStudent');
            }
        }
        else{
            $this->view->render('error');
        }
        
    }
    //
    function ConductorParticipation(){
        if(isset($_SESSION['job_title'])){
            if($_SESSION['job_title']=='Admin'||$_SESSION['job_title']=='Manager'){
                $this->view->render('Report/ConductorParticipation');
            }
        }
        else{
            $this->view->render('error');
        }
        
    }
    //
    function customerGrowing(){
        if(isset($_SESSION['job_title'])){
            if($_SESSION['job_title']=='Admin'||$_SESSION['job_title']=='Manager'){
                $this->view->render('Report/customerGrowing');
            }
        }
        else{
            $this->view->render('error');
        }
        
    }
    //
    function examParticipationDays(){
        if(isset($_SESSION['job_title'])){
            if($_SESSION['job_title']=='Admin'||$_SESSION['job_title']=='Manager'){
                $this->view->render('Report/examParticipationDays');
            }
        }
        else{
            $this->view->render('error');
        }
        
    }
    //
    function examParticipationStudents(){
        if(isset($_SESSION['job_title'])){
            if($_SESSION['job_title']=='Admin'||$_SESSION['job_title']=='Manager'){
                $this->view->render('Report/examParticipationStudents');
            }
        }
        else{
            $this->view->render('error');
        }
        
    }
    //
    function sessionReport(){
        if(isset($_SESSION['job_title'])){
            if($_SESSION['job_title']=='Admin'||$_SESSION['job_title']=='Manager'){
                $this->view->render('Report/sessionReport');
            }
        }
        else{
            $this->view->render('error');
        }
        
    }

    
//end report
    //JOB TITLES FOR add employee
    function loadJobs(){
        $jobs=$this->model->loadJobs();
        echo json_encode($jobs);
    }
    //register an employee view
    function addEmployee(){
        if(isset($_SESSION['job_title'])){
            if($_SESSION['job_title']=='Admin'){
                $this->view->render('Admin/AdminAddEmployee');
            }
        }
        else{
            $this->view->render('error');
        }
        
    }
    // add extra prices view
    function addExtraPrices(){
        if(isset($_SESSION['job_title'])){
            if($_SESSION['job_title']=='Admin'){
                $this->view->render('Admin/AdminAddExtraPrices');
            }
        }
        else{
            $this->view->render('error');
        }
        
    }
    // add init prices view
    function addInitPrices(){
        if(isset($_SESSION['job_title'])){
            if($_SESSION['job_title']=='Admin'){
                $this->view->render('Admin/AdminAddInitPrices');
            }
        }
        else{
            $this->view->render('error');
        }
        
    }
    // add packages view
    function addPackage(){
        if(isset($_SESSION['job_title'])){
            if($_SESSION['job_title']=='Admin'){
                $this->view->render('Admin/AdminAddPackage');
            }
        }
        else{
            $this->view->render('error');
        }
        
    }

    function editEmployee(){
        if(isset($_SESSION['job_title'])){
            if($_SESSION['job_title']=='Admin'){
                $this->view->render('Admin/AdminEditEmployee');
            }
        }
        else{
            $this->view->render('error');
        }
        
    }
    
    function editPackages(){
        if(isset($_SESSION['job_title'])){
            if($_SESSION['job_title']=='Admin'){
                $this->view->render('Admin/AdminEditPackages');
            }
        }
        else{
            $this->view->render('error');
        }
        
    }

    function employeeAccounts(){
        if(isset($_SESSION['job_title'])){
            if($_SESSION['job_title']=='Admin'){
                $this->view->render('Admin/AdminEmployeeAccounts');
            }
        }
        else{
            $this->view->render('error');
        }
        
    }

    function employeeDetails(){
        if(isset($_SESSION['job_title'])){
            if($_SESSION['job_title']=='Admin'){
                $this->view->render('Admin/AdminEmployeeDetails');
            }
        }
        else{
            $this->view->render('error');
        }
        
    }

    function packages(){
        if(isset($_SESSION['job_title'])){
            if($_SESSION['job_title']=='Admin'){
                $this->view->render('Admin/AdminPackages');
            }
        }
        else{
            $this->view->render('error');
        }
        
    }

    function initExpences(){
        if(isset($_SESSION['job_title'])){
            if($_SESSION['job_title']=='Admin'){
                $this->view->render('Admin/AdminInitExpences');
            }
        }
        else{
            $this->view->render('error');
        }
        
    }

    function staff(){
        if(isset($_SESSION['job_title'])){
            if($_SESSION['job_title']=='Admin'){
                $this->view->render('Admin/AdminStaff');
            }
        }
        else{
            $this->view->render('error');
        }
        
    }

    function studentAccounts(){
        if(isset($_SESSION['job_title'])){
            if($_SESSION['job_title']=='Admin'){
                $this->view->render('Admin/AdminStudentAccounts');
            }
        }
        else{
            $this->view->render('error');
        }
        
    }

    function vehicles(){
        if(isset($_SESSION['job_title'])){
            if($_SESSION['job_title']=='Admin'){
                $this->view->render('Admin/AdminVehicles');
            }
        }
        else{
            $this->view->render('error');
        }
        
    }

    function viewMoreEmployee(){
        if(isset($_SESSION['job_title'])){
            if($_SESSION['job_title']=='Admin'){
                $this->view->render('Admin/AdminViewMoreEmployee');
            }
        }
        else{
            $this->view->render('error');
        }
        
    }

    function addVehicle(){
        if(isset($_SESSION['job_title'])){
            if($_SESSION['job_title']=='Admin'){
                $this->view->render('Admin/AdminAddVehicle');
            }
        }
        else{
            $this->view->render('error');
        }
        
    }

    function viewComlain(){
        if(isset($_SESSION['job_title'])){
            if($_SESSION['job_title']=='Admin'){
                $this->view->render('Admin/AdminViewComplain');
            }
        }
        else{
            $this->view->render('error');
        }
        
    }
    function complaintLogic(){
        $value=$this->model->getcomplaints();
        echo json_encode($value);
    }

    function viewReview(){
        if(isset($_SESSION['job_title'])){
            if($_SESSION['job_title']=='Admin'){
                $this->view->render('Admin/AdminViewReview');
            }
        }
        else{
            $this->view->render('error');
        }
        
    }
    function reviewLogic(){
        $value=$this->model->getreviews();
        echo json_encode($value);
    }

    function registerEmployee($data){
        $user = explode(",", $data);
        $result=$this->model->registerEmployee($user[0], $user[1], $user[2], $user[3], $user[4], $user[5], $user[6], $user[7]);
        echo $result; 
    }

    function getEmployeeDetails(){
        $result=$this->model->getEmployeeDetails();
        echo json_encode($result);
    }

    function getEmployeeDetailsMore($id){
        $result=$this->model->getEmployeeDetailsMore($id);
        echo "success";
    }
    function displayEmployeeDetails(){
        echo json_encode($_SESSION['empDetails']);
    }

    function displayEmployeeDetailsforEdit(){
        $results = $this->model->displayEmployeeDetailsforEdit();
        echo json_encode($results);
    }

    //function for load vehicle classes (admin/addInitPrice.js   && view/admin/addInitPrice.php) ----- add vehicle to database
    function addVehiclelogic($data){
        $vehicle = explode(",", $data);
        $vehicleNum=$vehicle[0];
        $type=$vehicle[1];
        $classType = $this->model->VehicleClassesByName();
        $results = $this->model->addVehiclelogic($vehicleNum,$type,$classType);
        echo $results;
    }
    //load vehicle classes by name (type) 
    function VehicleClassesByName(){
        $result = $this->model->VehicleClassesByName();
        echo json_encode($result);
    }

    // function for view all vehicles
    function loadVehicle(){
        $result = $this->model->loadVehicle();
        echo json_encode($result);
    }

    //function fo get student setails
    function getStudentDetails(){
        $result = $this->model->getStudentDetails();
        echo json_encode($result);
    }
   //function for get students more details and store them to a session variable
    function viewMoreStudentsDetails($id){
        $result = $this->model->viewMoreStudentsDetails($id);
        echo $result;
        
    }
    //desplay student details
    function displayStudentDetails(){
        echo json_encode($_SESSION['result']);
    }

    //PACKAGES/ initial prices
    function loadInitPrices(){
        $result = $this->model->loadInitPrices();
        echo json_encode($result);
        
    }

    //Packages / edit change initial prices
    function editInitPrices($data){
        $details = explode(",", $data);
        $result = $this->model->editInitPrices($details);
        echo $result;
    }
    //Packages / edit change Extra prices
    function editExtraPrices($data){
        $details = explode(",", $data);
        $result = $this->model->editExtraPrices($details);
        echo $result;
    }

    //load Service Charges for RMV ----> initial charges
    function loadExpences(){
        $result = $this->model->loadExpences();
        echo json_encode($result);
    }
    //load Service Charges for RMV ----> Other charges
    function loadOtherExpences(){
        $result = $this->model->loadOtherExpences();
        echo json_encode($result);
    }
    //Edit Service Charges for RMV ----> initial charges
    function editInitCharges($data){
        $details = explode(",", $data);
        $result = $this->model->editInitCharges($details);
        echo $result;
    }
    //Edit Service Charges for RMV ----> Other charges
    function editOtherCharges($data){
        $details = explode(",", $data);
        $result = $this->model->editOtherCharges($details);
        echo $result;
    }

    function getPackages(){
        $result = $this->model->getPackages();
        echo json_encode($result);
    }
    // load edit package details
    function clickEditPackages($id){
        $result = $this->model->clickEditPackages($id);
        echo $result;
    }
    //get edit package details
    function editDetails(){
        $result = $this->model->editDetails();
        echo json_encode($result); 
    }
    //function for edit pakage  name
    function editPackageName($name){
        $result = $this->model->editPackageName($name);
        echo $result;
    }
    //function for edit pakage  days
    function editPackageDays($days){
        $result = $this->model->editPackageDays($days);
        echo $result;
    }
    //function for edit pakage price
    function editPackagePrices($price){
        $result = $this->model->editPackagePrices($price);
        echo $result;
    }
    //function fo delete packages
    function deletePackage($username,$password){
        $result = $this->model->deletePackage($username,$password);
        echo $result;
    }
    function VehicleID($id){
        $_SESSION['vehiId'] = $id;
        echo $id;
    }

    function deleteVehicle($username,$password){
        $result = $this->model->deleteVehicle($username,$password,$_SESSION['vehiId']);
        echo $result;
    }

    function deleteEmployee($username,$password){
        $result = $this->model->deleteEmployee($username,$password,$_SESSION['empID']);
        echo $result;
    }
    //get vehicle classes for add package ui
    function getClasses(){
        $result = $this->model->getClasses();
        echo json_encode($result);
    }

    //add packages
    function addPackageLogic($data){
        $details = explode(",", $data);
        $result = $this->model->addPackageLogic($details);
        // echo $data;
    }

    function updateEmployeeDetails($cat,$data){
        $result = $this->model->updateEmployeeDetails($cat,$data);
        echo $result;
    }



    function searchEmployee($id){
        $result = $this->model->searchEmployee($id);
        echo json_encode($result);
    }

    function searchStudent($id){
        $result = $this->model->searchStudent($id);
        echo json_encode($result);
    }

    

    


}