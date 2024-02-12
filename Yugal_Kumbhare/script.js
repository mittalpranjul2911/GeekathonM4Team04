//generatePDF code
// function generatePDF(){
//     const ele = document.querySelector(".dataOfEmployee");
//     const options = {
//         filename: 'my-document.pdf',
//         margin: 1,
//         image: { type: 'jpeg', quality: 0.98 },
//         html2canvas: { scale: 2 },
//         jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
//     };
//     html2pdf().set(options).from(ele).save();
// }


//1. color and textcolor
let selectColor = document.querySelector(".colorid");//console.log(selectColor);
let selectTextColor = document.querySelector(".textid");//console.log(selectTextColor);
let selectBrownBox = document.querySelector(".brown_color_box");//console.log(selectBrownBox);

let selectColor2 = document.querySelector("#showTwo .colorid");
let selectTextColor2 = document.querySelector("#showTwo .textid");
let selectBrownBox2 = document.querySelector("#showTwo .brown_color_box");

selectColor.addEventListener('change', () =>{
    selectBrownBox.style.backgroundColor = selectColor.value;
});
selectColor.addEventListener('change', () =>{
    selectBrownBox2.style.backgroundColor = selectColor.value;
});

selectTextColor.addEventListener('change', ()=>{
    selectBrownBox.style.color = selectTextColor.value;
});
selectTextColor.addEventListener('change', ()=>{
    selectBrownBox2.style.color = selectTextColor.value;
});


//2. personal info
let selectPersonalName = document.querySelector("#names");//console.log(selectPersonalName);
let selectPersonalEmail = document.querySelector("#email_id");//console.log(selectPersonalEmail);
let selectPhoneNumber = document.querySelector("#phone_number");//console.log(selectPhoneNumber);
let selectCitys = document.querySelector("#citys"); //onsole.log(selectCitys);
let selectHeading1 = document.querySelector(".heading1");//console.log(selectHeading1);
let selectSkillPhone = document.querySelector(".personal_detail_phone_data");//console.log(selectSkillPhone);
let selectSkillEmail = document.querySelector(".personal_detail_email_data");//console.log(selectSkillEmail);
let selectSkillLocation = document.querySelector(".personal_detail_country_data");//console.log(selectSkillLocation);

let selectHeading2 = document.querySelector("#showTwo .heading1");
let selectSkillPhone2 = document.querySelector("#showTwo .personal_detail_phone_data");
let selectSkillEmail2 = document.querySelector("#showTwo .personal_detail_email_data");
let selectSkillLocation2 = document.querySelector("#showTwo .personal_detail_country_data");
// akhil sharma name code
selectPersonalName.addEventListener('input' , ()=>{
    selectHeading1.innerHTML = selectPersonalName.value;
});
selectPersonalName.addEventListener('input' , ()=>{
    selectHeading2.innerHTML = selectPersonalName.value;
});
// email id print code
selectPersonalEmail.addEventListener('input', ()=>{
    selectSkillEmail.innerHTML = selectPersonalEmail.value;
});
selectPersonalEmail.addEventListener('input', ()=>{
    selectSkillEmail2.innerHTML = selectPersonalEmail.value;
});
//phone num print code
selectPhoneNumber.addEventListener('input', ()=>{
    selectSkillPhone.innerHTML = selectPhoneNumber.value;
});
selectPhoneNumber.addEventListener('input', ()=>{
    selectSkillPhone2.innerHTML = selectPhoneNumber.value;
});
//location/country print code
selectCitys.addEventListener('input' , ()=> {
    selectSkillLocation.innerHTML = selectCitys.value;
});
selectCitys.addEventListener('input' , ()=> {
    selectSkillLocation2.innerHTML = selectCitys.value;
});


//3.profeessional info
let selectProfessTitle = document.querySelector("#profess_title");//console.log(selectProfessTitle);
let selectProfessTextarea = document.querySelector(".profess_details_inputs");//console.log(selectProfessTextarea);
let selectProfessSkill = document.querySelector("#pro_skill");//console.log(selectProfessSkill);
let selectHeading3 = document.querySelector(".heading3");//console.log(selectHeading3);
let selectSummaryBelow = document.querySelector(".profeessional_textarea_data");//console.log(selectSummaryBelow);
let selectSkillBelow = document.querySelector(".profressional_form_skills_data");//console.log(selectSkillBelow);

let selectHeading3Second = document.querySelector("#showTwo .heading3");//console.log(selectHeading3);
let selectSummaryBelow2 = document.querySelector("#showTwo .profeessional_textarea_data");//console.log(selectSummaryBelow);
let selectSkillBelow2 = document.querySelector("#showTwo .profressional_form_skills_data");//console.log(selectSkillBelow);

// profess SDE code
selectProfessTitle.addEventListener('input', ()=>{
    selectHeading3.innerHTML = selectProfessTitle.value;
});
selectProfessTitle.addEventListener('input', ()=>{
    selectHeading3Second.innerHTML = selectProfessTitle.value;
});

//profess textarea code
selectProfessTextarea.addEventListener('input', ()=>{
    selectSummaryBelow.innerHTML = selectProfessTextarea.value;
});
selectProfessTextarea.addEventListener('input', ()=>{
    selectSummaryBelow2.innerHTML = selectProfessTextarea.value;
});
//profess skill code
selectProfessSkill.addEventListener('input', ()=>{
    selectSkillBelow.innerHTML = selectProfessSkill.value;
});
selectProfessSkill.addEventListener('input', ()=>{
    selectSkillBelow2.innerHTML = selectProfessSkill.value;
});
// selectProfessSkill.value.split(",").forEach(ele =>{
//         const p = document.createElement('p');
//         p.classList.add('p_tag');
//         p.innerText = `
//         <p style="color: white; background-color: black;">${ele}</p>`
//         selectSkillBelow.append(ele);
// });



/* add employment button start */
let selectAddEmployment = document.querySelector(".add_employee");//console.log(selectAddEmployment);
let selectAddEmploymentForm = document.querySelector(".add_employee_form");
let selectProfeeExperiSummary = document.querySelector(".profess_experience_summary");

selectAddEmployment.addEventListener('click',()=>{
        
    /* first div create */
    let createAddEmploymentDiv = document.createElement('div');
    createAddEmploymentDiv.innerHTML = `
        <label>Start</label>
        <input type="date" class="start_date_add_employee">
        <label>End</label>
        <input type="date" class="end_date_add_employee">
        <input type="text" id="job_title_employeement" placeholder="job Title">
        <input type="text" id="employer_employeement" placeholder="Employer">
        <textarea id="employment_description" cols="40" rows="8" placeholder="Description"></textarea>`
        selectAddEmploymentForm.append(createAddEmploymentDiv);

    /* second div create */
    let createprofeeExperiSummDiv = document.createElement('div');
    createprofeeExperiSummDiv.innerHTML = `
        <div class="flex_data">
            <ul>
                <li class="pasteText_job_title_employeement"></li>
            </ul> 
            <span>
                <span id="start_Date"></span>
                <span id="end_Date"></span>
            </span>
        </div><br>
        <label class="pasteText_employer"></label><br><br>
        <label class="pasteText_description_employeement"></label>`
        selectProfeeExperiSummary.append(createprofeeExperiSummDiv);

    /* pass values start */
    let selectStartDateOfAddEmployee = document.querySelector(".start_date_add_employee");
    let selectEndDateOfAddEmployee = document.querySelector(".end_date_add_employee");
    let selectJobTitleValueOfEmployee = document.querySelector("#job_title_employeement");
    let selectEmployerOfEmployee = document.querySelector("#employer_employeement");
    let selectEmployeeDescription = document.querySelector("#employment_description");

    let selectStartDateOfProfessExperi = document.querySelector("#start_Date");
    let selectEndDateOfProfessExperi = document.querySelector("#end_Date");
    let selectSDEAtAmazon = document.querySelector(".pasteText_job_title_employeement");//console.log(selectSDEAtAmazonValue);
    let selectSDE = document.querySelector(".pasteText_employer");//console.log(selectSDE);
    let selectcanWritingAnything = document.querySelector(".pasteText_description_employeement");//console.log(selectcanWritingAnything);


    selectStartDateOfAddEmployee.addEventListener('input', ()=>{
        selectStartDateOfProfessExperi.innerHTML = selectStartDateOfAddEmployee.value;
    });

    selectEndDateOfAddEmployee.addEventListener('input',()=>{
        selectEndDateOfProfessExperi.innerHTML = selectEndDateOfAddEmployee.value;
    });  
    selectJobTitleValueOfEmployee.addEventListener('input', ()=>{
        selectSDEAtAmazon.innerHTML = selectJobTitleValueOfEmployee.value;
    });
    selectEmployerOfEmployee.addEventListener('input', ()=>{
        selectSDE.innerHTML = selectEmployerOfEmployee.value;
    });
    selectEmployeeDescription.addEventListener('input', ()=>{
        selectcanWritingAnything.innerHTML = selectEmployeeDescription.value; 
    });
    
    
    
});
/* add employment button end */

/* add project button start */
let selectAddProject = document.querySelector(".add_project");//console.log(selectAddEmployment);
let selectAddProjectForm = document.querySelector(".add_project_form");
let selectProjectSummary = document.querySelector(".projects_summary");

/* first div created */
selectAddProject.addEventListener('click',()=>{
    let createAddProjectDiv = document.createElement('div');
    createAddProjectDiv.innerHTML = `
        <label>Start</label>
        <input type="date" class="start_date_add_project">
        <label>End</label>
        <input type="date" class="end_date_add_project">
        <input type="text" id="project_title" placeholder="Project Title">
        <textarea id="project_description" cols="40" rows="8" placeholder="Description"></textarea>`
        selectAddProjectForm.append(createAddProjectDiv);


/*sec div created */
    let createProjectSummDiv = document.createElement('div');
    createProjectSummDiv.innerHTML = `
        <div class="flex_data">
        <ul>
            <li class="pasteText_job_title_project"></li>
        </ul> 
        <span>
            <span id="start_Date_project"></span>
            <span id="end_Date_project"></span>
        </span>
        </div><br>
        <label class="pasteText_project"></label><br><br>`
        selectProjectSummary.append(createProjectSummDiv);

    /* pass values start */
    let selectStartDateOfAddProject = document.querySelector(".start_date_add_project");
    let selectEndDateOfAddProject = document.querySelector(".end_date_add_project");
    let selectJobTitleValueOfProject = document.querySelector("#project_title");
    let selectProjectDescription = document.querySelector("#project_description");

    let selectStartDateOfProject = document.querySelector("#start_Date_project");
    let selectEndDateOfProject = document.querySelector("#end_Date_project");
    let selectSDEAtAmazonProject = document.querySelector(".pasteText_job_title_project");//console.log(selectSDEAtAmazonValue);
    let selectSDEProject = document.querySelector(".pasteText_project");//console.log(selectSDE);


    selectStartDateOfAddProject.addEventListener('input', ()=>{
        selectStartDateOfProject.innerHTML = selectStartDateOfAddProject.value;
    });

    selectEndDateOfAddProject.addEventListener('input',()=>{
        selectEndDateOfProject.innerHTML = selectEndDateOfAddProject.value;
    });  
    selectJobTitleValueOfProject.addEventListener('input', ()=>{
        selectSDEAtAmazonProject.innerHTML = selectJobTitleValueOfProject.value;
    });
    // selectEmployerOfEmployee.addEventListener('input', ()=>{
    //     selectSDE.innerHTML = selectEmployerOfEmployee.value;
    // });
    selectProjectDescription.addEventListener('input', ()=>{
        selectSDEProject.innerHTML = selectProjectDescription.value; 
    });

});
/* add project button end */

/* add education button start */
let selectAddEducation = document.querySelector(".add_education");//console.log(selectAddEmployment);
let selectAddEducationForm = document.querySelector(".add_education_form");
let selectEducationSummary = document.querySelector(".education_summary");

/* first div  */
selectAddEducation.addEventListener('click',()=>{
    let createAddEducationDiv = document.createElement('div');
    createAddEducationDiv.innerHTML = `
        <label>Start</label>
        <input type="date" class="start_date_add_education">
        <label>End</label>
        <input type="date" class="end_date_add_education">
        <input type="text" id="education_qualification" placeholder="Qualification">
        <input type="text" id="education_school" placeholder="School/College">
        <textarea id="education_description" cols="40" rows="8" placeholder=" Description"></textarea>`
        selectAddEducationForm.append(createAddEducationDiv);

    /* second div create */
    let createEucationSummDiv = document.createElement('div');
    createEucationSummDiv.innerHTML = `
        <div class="flex_data">
            <ul>
                <li class="pasteText_job_title_education"></li>
            </ul> 
            <span>
                <span id="start_Date_education"></span>
                <span id="end_Date_education"></span>
            </span>
        </div><br>
        <label class="pasteText_education"></label><br><br>
        <label class="pasteText_description_education"></label>`
        selectEducationSummary.append(createEucationSummDiv);

    /* pass values start */
    let selectStartDateOfAddEducation = document.querySelector(".start_date_add_education");
    let selectEndDateOfAddEducation = document.querySelector(".end_date_add_education");
    let selectJobTitleValueOfEducation = document.querySelector("#education_qualification");
    let selectEmployerOfEducation = document.querySelector("#education_school");
    let selectEducationDescription = document.querySelector("#education_description");

    let selectStartDateOfEducation = document.querySelector("#start_Date_education");
    let selectEndDateOfEducation = document.querySelector("#end_Date_education");
    let selectSDEAtAmazonEducation = document.querySelector(".pasteText_job_title_education");//console.log(selectSDEAtAmazonValue);
    let selectSDEEducation = document.querySelector(".pasteText_education");//console.log(selectSDE);
    let selectcanWritingAnythingEducation = document.querySelector(".pasteText_description_education");//console.log(selectcanWritingAnything);


    selectStartDateOfAddEducation.addEventListener('input', ()=>{
        selectStartDateOfEducation.innerHTML = selectStartDateOfAddEducation.value;
    });

    selectEndDateOfAddEducation.addEventListener('input',()=>{
        selectEndDateOfEducation.innerHTML = selectEndDateOfAddEducation.value;
    });  
    selectJobTitleValueOfEducation.addEventListener('input', ()=>{
        selectSDEAtAmazonEducation.innerHTML = selectJobTitleValueOfEducation.value;
    });
    selectEmployerOfEducation.addEventListener('input', ()=>{
        selectSDEEducation.innerHTML = selectEmployerOfEducation.value;
    });
    selectEducationDescription.addEventListener('input', ()=>{
        selectcanWritingAnythingEducation.innerHTML = selectEducationDescription.value; 
    });
});
/* add education button end */






// $(document).ready(function(){
//     $('#select_two_items').on('change', function(){
        
//     	var demovalue = $(this).val(); 
//         $("div.myDiv").hide();
//         $("#show"+demovalue).show();
        
//     });
// });

$(document).ready(function(){
    $('#select_two_items').change(function(){
      var selectedOption = $(this).val();
      

      if(selectedOption === 'One') {
        $('#showOne').show();
        $('#showTwo').hide();
      } 
      if(selectedOption === 'Two') {
        $('#showTwo').show();
        $('#showOne').hide();
      } 
    });
  });