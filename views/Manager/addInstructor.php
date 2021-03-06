<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="<?php echo URL?>public/css/Manager/addConductor&Vehicle&Student/addConductor&Vehicle&Student.css">
    <link rel="stylesheet" href="<?php echo URL?>public/css/Manager/addConductor&Vehicle&Student/tableStyle.css">
    <link rel="stylesheet" href="<?php echo URL?>public/css/common/backgroundAnim.css">
    <title>Lead driving school</title>
</head>
<body>
<ul class="background">
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
</ul>
    <div class="confirmation-box" id="confirmation">
          <div class="box-body">
              <div class="popup-content-box">
                  <p id="boxMsg"></p>
                      <div class="popup-button-set">
                        <button class="popup-confirm" name="confirm" id="confirm-got">Got it</button>     
                      </div>
              </div>
          </div>
      </div>
    <div class="main-content">
        <div class="addInstructor-box">
        <input type="hidden" id="selectedArr" value="<?php echo isset($_SESSION['selectedInstructorList'])?$_SESSION['selectedInstructorList']:"";?>">
            <div class="topic">
                <h1>Add Session Conductor</h1>
            </div>
            <div class="heading-row">
                    <div class="heading-cell">
                        <div class="information">
                            <div class="one">ID</div>
                            <div class="two">Name</div>
                            <div class="three">Role</div>
                        </div>
                    </div>
            </div>
            <div class="table" id="tablerows">

            </div>
            <div class="bottom-part">
                <div class="participation-count">
                <p id="counter"></p><p>Participants</p>
                </div>
                <div class="button-set">
                    <a href="<?php echo URL?>Manager/addExam"><button class="cancel" id="cancel" name="cancel">Back</button></a>
                    <button class="save" id="save" name="save"  onclick="assignInstructors()">Save Changes</button>
                </div>
            </div>
        </div>
    </div>
    <script src="<?php echo URL?>public/js/manager/addInstructorsE.js"></script>
</body>
</html>