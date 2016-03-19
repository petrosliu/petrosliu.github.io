var data = '{"basics":{"name":"Yiding Liu","tel":"OTc5NTcxODg2MA==","email":"bHlkQHRhbXUuZWR1","links":[{"name":"github","link":"https://github.com/petrosliu"},{"name":"linkedin","link":"http://www.linkedin.com/in/ydliu"},{"name":"instagram","link":"https://www.instagram.com/petrosliu/"},{"name":"wechat","link":"http://weixin.qq.com/r/uvu2rtjE_IWHrZzN966o"},{"name":"resume","link":"https://www.dropbox.com/s/f3kphtk0zyv4hli/Yiding%20Liu%20Resume.pdf?raw=1"}],"summary":["Second-year Aggie majors in Information Science & System with great ambition to benefit lives with cutting-edge technology. Multi-platform professional with diverse skills include software/hardware development and web/native app design. Deep in image, video and 3D scene processing and analysis involving machine learning techniques. Hard-working and goal-oriented developer","Seeking to apply my abilities to a position of Software Engineer in 2016."],"portrait":"img/portrait.png","others":{"backportrait":"img/portraitback.png","formattedtel":"PGkgY2xhc3M9ImZhIGZhLWFuZ2xlLWxlZnQiPjwvaT45Nzk8aSBjbGFzcz0iZmEgZmEtYW5nbGUtcmlnaHQiPjwvaT41NzEtODg2MA==","formattedemail":"bHlkPGkgY2xhc3M9ImZhIGZhLWF0Ij48L2k+dGFtdS5lZHU="}},"education":{"colleges":[{"name":"Texas A&M University","logo":"img/Texas_A&M_University_Logo.svg","logowidth":"44px","color":"#500000","degree":"Master of Science","major":"Information Science & System","location":"College Station, TX","time":"August 2016","gpa":"3.9","overall":"4.0","courses":["Analysis of Algorithms","Software Engineering","Machine Learning with Neural Networks","Pattern Recognition","Digital Image Processing","Statistical Communication Theory","Linear Network Analysis"]},{"name":"Nanjing University","logo":"img/Nanjing_University_Logo.svg","logowidth":"38px","color":"#63065f","degree":"Bachelor of Science","major":"Electrical Information Science & Technology","location":"Nanjing, China","time":"July 2014","gpa":"3.4","overall":"4.0","courses":["C++ and Object Oriented Programming","Website Programming: JSP and MYSQL","Introduction to Database","Cryptography and Information Security","Theory of Information and Coding","Microprocessors and Embedded System"]}],"others":[{"name":"Coursera","color":"#0068b0","courses":["Front-End Web UI Frameworks and Tools","Machine Learning","Artificial Intelligence Planning","Using Python to Access Web Data","iOS App Development Basics"]}]},"skills":[{"kind":"Languages","items":["C/C++","Python","JavaScript","Shell scripting","Ruby","Swift","SQL"]},{"kind":"Web Development","items":["HTML","CSS","JavaScript","Python","Bootstrap","XML","JSON"]},{"kind":"Tools","items":["Visual Studio","Matlab","LaTeX","Xcode","Git","OpenCV","OpenGL","Photoshop"]},{"kind":"Others","items":["Image Processing","Computer Graphics","Machine Learning","Artificial Intelligence"]}],"experience":{"works":[{"title":"C++ Developer","location":"Media Lab, Department of Electrical & Computer Engineering, Texas A&M University, TX","time":"January 2015 - Present","description":["Designed a JPEG XR encoder to support efficient and precise control of compression rate and signal-to-noise ratio.","Proposed an image format based on JPEG XR to store 3D geophysical data (SEG-Y) with floating-point values in any range."],"link":"https://github.com/petrosliu/JPEGXR-Extended","logo":"fa fa-cog faa-shake faa-slow animated","images":["img/exp/exp1.1.png","img/exp/exp1.2.png"]},{"title":"Research Internship","location":"CG Lab, Institute of Computer Science & Technology, Peking University, Beijing, China","time":"July 2013 - May 2014","description":["Designed a 3D calibration method of multiple cameras used in a dynamic 3D object reconstruction system based on Image-Based Visual Hulls (IBVH) by improving a classical solution to the P4P problem in order to adapt for cubic calibration object and multiple control points.","Proposed an estimation method to evaluate the view angle scope of application of the calibration system and to help designers test the feasibility of the design of the calibra- tion object beforehand by quantifying the algorithm error in the rotation matrix, the translation vector and other physical quantities."],"link":"https://github.com/petrosliu/Camera-Calibration","logo":"fa fa-fw fa-github","images":["img/exp/exp2.1.png","img/exp/exp2.2.png","img/exp/exp2.3.png"]},{"title":"Research Assistant","location":"Embedded Software/Hardware R&D Center, Nanjing University, Nanjing, China","time":"September 2012 - July 2013","description":["Proposed an algorithm to denoise and complete KINECT depth map by matching with detected edges of RGB maps.","Built a mobile robot platform for KINECT to exchange movement commands and measurement with PC.","Implemented Simultaneous Localization and Mapping (SLAM) algorithm to reconstruct 3D indoor scene with KINECT depth and RGB video and robot movement automatically."],"link":"https://github.com/petrosliu/Mobile-Robot-Platform","logo":"fa fa-fw fa-github","images":["img/exp/exp3.1.png","img/exp/exp3.2.png","img/exp/exp3.3.png"]}],"projects":[{"title":"Mentor Matching System","description":["Built a student community website with Ruby on Rails and JavaScript to help students form groups and match mentors for competitions.","Exploited agile development and created a Software as a Service (SaaS)."],"link":"http://honorsprograms.tamu.edu","logo":"fa fa-cog faa-shake faa-slow animated","organization":"TAMU Honors Program"},{"title":"Genetic Prognosis","description":["Applied machine learning methods to identify gene-expression signatures in a genetic dataset and analyzed the performance of different classifier design, error estimation, and feature selection techniques."],"link":"https://github.com/petrosliu/Genetic-Prognosis","logo":"fa fa-fw fa-github","organization":"Pattern Recognition"},{"title":"Network Optimization","description":["Utilized multiple data structures and different max-bandwidth-path algorithms to implement a network routing protocol with Python."],"link":"https://github.com/petrosliu/Network-Optimization","logo":"fa fa-fw fa-github","organization":"Analysis of Algorithms"},{"title":"Website Design","description":["Designed a restaurant website supporting reservation and review using JavaScript and Bootstrap."],"link":"https://github.com/petrosliu/Restaurant-Website","logo":"fa fa-fw fa-github","organization":"Front-End Web UI Frameworks and Tools"},{"title":"Photo Filter iOS App","description":["Developed a universal iOS app with Swift to apply multiple blend filters and tunings on photos."],"link":"https://github.com/petrosliu/Photo-Filter-App","logo":"fa fa-fw fa-github","organization":"iOS App Development Basics"}]},"honors":[{"title":"Graduate Merit Scholarship","awarder":"Texas A&M University","time":"2015"},{"title":"Graduate Merit Scholarship","awarder":"Texas A&M University","time":"2014"},{"title":"People’s Scholarship","awarder":"Nanjing University","time":"2013"},{"title":"People’s Scholarship","awarder":"Nanjing University","time":"2012"},{"title":"Outstanding League Member","awarder":"Student Union, Nanjing University","time":"2010"}]}';

var obj = JSON.parse(data);
var wechatqr = '<a target="_blank" href="'+obj.basics.links[3].link+'"><img draggable="false" class="img-responsive img-thumbnail qr" src="img/wechat.jpg" style="width:180px;"></a>';

$(document).ready(function() {

    var edutext = '<table  class="table boardless">';
    var coursetext = '';
    for (var i = 0; i < obj.education.colleges.length; i++) {
        edutext += '<tr><td style="align:center"><img draggable="false" src="' +
            obj.education.colleges[i].logo +
            '" alt="" class="img-responsive center-block" alt="Responsive image" style="width:' +
            obj.education.colleges[i].logowidth +
            ';"></td><td><span><I>' +
            obj.education.colleges[i].degree +
            '</I> <span class="badge progress-bar-warning">' +
            obj.education.colleges[i].gpa + ' / ' + obj.education.colleges[i].overall +
            '</span><br>' +
            obj.education.colleges[i].major +
            '<br><B>' +
            obj.education.colleges[i].name +
            '</B>, ' +
            obj.education.colleges[i].location +
            '</span></td><td class="td-right">' +
            obj.education.colleges[i].time +
            '</td></tr><tr>';

        coursetext += '<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12"><table class="table table-condensed" style="border-top: thick solid ' +
            obj.education.colleges[i].color +
            ';"><tr><th>' +
            obj.education.colleges[i].name +
            '</th></tr>';
        for (var j = 0; j < obj.education.colleges[i].courses.length; j++) {
            coursetext += '<tr><td>' +
                obj.education.colleges[i].courses[j] +
                '</td></tr>';
        }
        coursetext += '<tr><td>etc.</td></tr></table></div>';
    }
    edutext += '</table>';
    $('#edutable').html(edutext);

    for (var i = 0; i < obj.education.others.length; i++) {
        coursetext += '<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12"><table class="table table-condensed" style="border-top: thick solid ' +
            obj.education.others[i].color +
            ';"><tr><th>' +
            obj.education.others[i].name +
            '</th></tr>';
        for (var j = 0; j < obj.education.others[i].courses.length; j++) {
            coursetext += '<tr><td>' +
                obj.education.others[i].courses[j] +
                '</td></tr>';
        }
        coursetext += '<tr><td>etc.</td></tr></table></div>'
    }
    $('#coursetables').html(coursetext);

    var skilltext = '<table class="table boardless"><tbody>';
    for (var i = 0; i < obj.skills.length; i++) {
        skilltext += '<tr><td class="td-right td-bold">' +
            obj.skills[i].kind +
            ':</td><td>';
        for (var j = 0; j < obj.skills[i].items.length; j++) {
            skilltext += obj.skills[i].items[j] + ', ';
        }
        skilltext += 'etc.</td></tr>';
    }
    skilltext += '</tbody></table>';
    $('#skilltable').html(skilltext);

    var exptext = '';
    for (var i = 0; i < obj.experience.works.length; i++) {
        exptext += '<div class="col-lg-5 col-md-6 col-sm-6 col-xs-6"><B>' +
            obj.experience.works[i].title +
            '</B> <div class="btn-group" role="group" aria-label="social contact"><a class="btn btn-default btn-xs" type="button" href="' +
            obj.experience.works[i].link +
            '" target="_blank"><i class="' +
            obj.experience.works[i].logo +
            '"></i></a><button class="btn btn-default btn-xs btn-more" type="button" data-toggle="collapse" data-target="#collapseExp' + i +
            '" aria-expanded="false" aria-controls="collapseExp' + i +
            '"> More </button></div></div><div class="col-lg-5 col-md-5 col-sm-6 col-xs-6 td-right">' +
            obj.experience.works[i].time +
            '</div><div class="col-lg-10 col-md-11 col-sm-12 col-xs-12"><div class="collapse" id="collapseExp' + i +
            '" aria-expanded="false" style="height: 0px;"><div style="height:20px;width:100%;"></div><div class="well"><div id="carousel-exp' + i +
            '-generic" class="carousel slide" data-ride="carousel"><ol class="carousel-indicators">';

        for (var j = 0; j < obj.experience.works[i].images.length; j++) {
            exptext += '<li data-target="#carousel-exp' + i +
                '-generic" data-slide-to="' + j +
                '" '
            if (j == 0) exptext += 'class="active"';
            exptext += '></li>';
        }

        exptext += '</ol><div class="carousel-inner" role="listbox">';

        for (var j = 0; j < obj.experience.works[i].images.length; j++) {
            exptext += '<div class="item ';
            if (j == 0) exptext += 'active ';
            exptext += 'carousel-img-container"><a data-toggle="modal" data-target="#myModal" data-src="' +
                obj.experience.works[i].images[j] +
                '"><img draggable="false" src="" alt="" style="background-image:url(' +
                obj.experience.works[i].images[j] +
                ');height:300px;background-color:#000;"></a></div>';
        }

        exptext += '</div><a class="left carousel-control" href="#carousel-exp' + i +
            '-generic" role="button" data-slide="prev"><span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="right carousel-control" href="#carousel-exp' + i +
            '-generic" role="button" data-slide="next"><span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span><span class="sr-only">Next</span></a></div></div></div></div><div class="col-lg-10 col-md-11 col-sm-12 col-xs-12">' +
            obj.experience.works[i].location +
            '</div><div class="col-lg-10 col-md-11 col-sm-12 col-xs-12"><ul>';

        for (var j = 0; j < obj.experience.works[i].description.length; j++) {
            exptext += '<li>' +
                obj.experience.works[i].description[j] +
                '</li>';
        }
        exptext += '</ul></div>';
    }
    $('#experiencetable').html(exptext);

    var projecttext = '';
    for (var i = 0; i < obj.experience.projects.length; i++) {
        projecttext += '<div class="col-lg-10 col-md-11 col-sm-12 col-xs-12"><B>' +
            obj.experience.projects[i].title +
            '</B> <a class="btn btn-default btn-xs" type="button" target="_blank" href="' +
            obj.experience.projects[i].link +
            '"><i class="' +
            obj.experience.projects[i].logo +
            '"></i></a></div><div class="col-lg-10 col-md-11 col-sm-12 col-xs-12">' +
            obj.experience.projects[i].organization +
            '</div><div class="col-lg-10 col-md-11 col-sm-12 col-xs-12"><ul>';

        for (var j = 0; j < obj.experience.projects[i].description.length; j++) {
            projecttext += '<li>' +
                obj.experience.projects[i].description[j] +
                '</li>';
        }
        projecttext += '</ul></div>';
    }
    projecttext += '</tbody></table>';
    $('#projecttable').html(projecttext);

    var honortext = '<table class="table boardless"><tbody>';
    for (var i = 0; i < obj.honors.length; i++) {
        honortext += '<tr><td><B>' +
            obj.honors[i].title +
            '</B>, ' +
            obj.honors[i].awarder +
            '</td><td class="td-right">' +
            obj.honors[i].time +
            '</td></tr>';
    }
    honortext += '</tbody></table>';
    $('#honortable').html(honortext);

    var text = "tel:" + atob(obj.basics.tel);
    $('#phone-toggled').attr('href', text);
    $('#phone-sidebar').attr('href', text);

    text = atob(obj.basics.others.formattedtel);
    $('#phone-toggled').html('<i class="fa fa-fw fa-phone"></i>&nbsp;' + text);
    $('#phone-sidebar').html('<i class="fa fa-fw fa-phone"></i>&nbsp;&nbsp;' + text);

    text = atob(obj.basics.email);
    $('#mail-sidebar').attr('href', 'mailto:' + text);
    $('#mail-toggled').attr('href', 'mailto:' + text);
    
    text = atob(obj.basics.others.formattedemail);
    $('#mail-sidebar').html('<i class="fa fa-fw fa-envelope"></i>&nbsp;&nbsp;' + text);
    $('#mail-toggled').html('<i class="fa fa-fw fa-envelope"></i>&nbsp;' + text);

    $('[data-toggle="tooltip"]').tooltip({
        container: 'body'
    });


    if ($(window).width() < 768) {
        setTimeout(function() {
            $("#sidebar-toggled").collapse('show');
        }, 500);
    }
});

$('#wechat').popover({
    placement: 'bottom',
    content: wechatqr,
    html: true
});

$('.sidebar-link').click(function(e) {
    e.preventDefault();
    var goto = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(goto).offset().top
    }, 300);
});

$('#myModal').on('show.bs.modal', function(event) {
    var button = $(event.relatedTarget),
        src = button.data('src'),
        modal = $(this);
    modal.find('.modal-img').attr('src', src);
});

$(function() {
    var ink, d, x, y, cx, cy;
    $(".ripplelink").click(function(e) {
        if ($(this).find(".ink").length === 0) {
            $(this).prepend("<span class='ink'></span>");
        }

        ink = $(this).find(".ink");
        ink.removeClass("animate");

        if (!ink.height() && !ink.width()) {
            d = Math.max($(this).outerWidth(), $(this).outerHeight());
            ink.css({
                height: d,
                width: d
            });
        }

        x = e.pageX - $(this).offset().left - ink.width() / 2;
        y = e.pageY - $(this).offset().top - ink.height() / 2;

        ink.css({
            top: y + 'px',
            left: x + 'px'
        }).addClass("animate");
    });
});

$(window).resize(function() {
    if ($(this).width() < 768) {
        $("#sidebar-toggled").collapse('show');
    } else {
        $("#sidebar-toggled").collapse('hide');
    }
});

if (($(window).height() + 100) < $(document).height()) {
    $('#top-link-block').removeClass('hidden').affix({
        offset: {
            top: 100
        }
    });
}

$('.btn-more').click(function() {
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
    } else {
        $(this).addClass('active');
    }
})