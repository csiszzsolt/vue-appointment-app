<template>
  <div>
    <h4>Make an appointment here!</h4> 
    <div class="row">
      <div class="col s12 m6 offset-m3">

        <div v-if="ownReservation.details && new Date(Date.parse(ownReservation.date)).getTime() >= new Date(Date.now()).getTime()" class="create-appointment-wrapper">
          <h5>Seems like you have a reservation.</h5>
          <br>
          <h5><b><span class="teal-text text-lighten-2">{{ownReservation.hours}}:{{ownReservation.minutes}}</span> {{ownReservation.monthName}} {{ownReservation.day}}</b></h5>
          <p v-if="new Date(Date.parse(ownReservation.date)).getTime() - 14400000 <= new Date(Date.now()).getTime()">Your reservation is booked and it is less than <b>4 hours</b> until we meet, you <b>can not</b> cancel your reservation right now online. If you really need to cancel your reservation <b>contact us</b>!</p>
          
          <button class="waves-effect waves-light btn-small red lighten-2" @click="cancelReservation(ownReservation.details)" :disabled="new Date(Date.parse(ownReservation.date)).getTime() - 14400000 <= new Date(Date.now()).getTime()">Cancel</button>
        </div>

        <div v-if="user.loggedIn && userCredentials && userCredentials.emailVerified" class="create-appointment-wrapper">
          <h5 class="left-align">Pick date and time for your appointment below</h5>
          <div class="row">
            <div class="col s12 l6">
              <div class="svg-wrapper">
            <svg class="left svg-item" id="b3610dfe-b8fa-4701-9393-2c36a069038b" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="775" height="674" viewBox="0 0 775.54496 674.79236"><ellipse cx="671.87863" cy="666.88561" rx="103.66633" ry="7.90675" fill="#e6e6e6"/><path d="M924.27505,553.12484,914.25,581.08954a9.76236,9.76236,0,0,0,4.12995,11.64324h0a9.76236,9.76236,0,0,0,14.76113-7.2594l3.18161-28.33267L960.418,477.49244l-20.74871-10.0397Z" transform="translate(-212.22752 -112.60382)" fill="#a0616a"/><polygon points="703.681 651.689 718.406 651.689 718.406 508.456 684.94 507.787 703.681 651.689" fill="#a0616a"/><polygon points="638.088 651.689 652.813 651.689 652.813 508.456 619.348 507.787 638.088 651.689" fill="#a0616a"/><path d="M932.97613,636.1197l-38.15086-4.01588-8.03176-42.16674-14.7249,42.83605-45.5133-4.68519,18.74077-70.94722c34.25705-23.27818,66.79346-22.76913,97.71975,0Z" transform="translate(-212.22752 -112.60382)" fill="#2f2e41"/><path d="M868.29259,770.39328a11.95753,11.95753,0,0,1-13.47221,13.33221l-27.12649-3.679a9.27072,9.27072,0,0,1-7.73335-10.5695v0a9.2707,9.2707,0,0,1,9.16291-7.861H833.596l14.71508-13.40708c.1451,9.13206,6.87039,7.10423,17.98509,6.213Z" transform="translate(-212.22752 -112.60382)" fill="#2f2e41"/><path d="M933.8853,770.39328a11.95753,11.95753,0,0,1-13.47221,13.33221l-27.1265-3.679a9.2707,9.2707,0,0,1-7.73334-10.5695v0a9.27071,9.27071,0,0,1,9.16291-7.861h4.47255l14.71507-13.40708c.1451,9.13206,6.87039,7.10423,17.9851,6.213Z" transform="translate(-212.22752 -112.60382)" fill="#2f2e41"/><circle cx="669.37881" cy="256.29254" r="23.59329" fill="#a0616a"/><polygon points="699.331 295.949 669.881 298.627 669.881 272.523 685.275 263.153 699.331 295.949" fill="#a0616a"/><path d="M946.36239,567.18042c-29.62732-21.69481-65.20232-19.49042-104.41288-2.67725,17.76524-50.29176,25.33252-97.16236,11.37833-136.81287a31.54561,31.54561,0,0,1,23.72756-30.56148l5.05291-1.29261,24.7646,1.33863,23.25466,13.632a31.65783,31.65783,0,0,1,15.64752,27.16726Z" transform="translate(-212.22752 -112.60382)" fill="#e6e6e6"/><path d="M831.90982,547.77034,821.88474,575.735a9.76236,9.76236,0,0,0,4.13,11.64324h0a9.76237,9.76237,0,0,0,14.76114-7.2594l3.1816-28.33266,24.09528-79.64829L847.304,462.09823Z" transform="translate(-212.22752 -112.60382)" fill="#a0616a"/><path d="M965.77248,492.88665H932.97613v-80.3176h0A45.24572,45.24572,0,0,1,955.287,442.84237Z" transform="translate(-212.22752 -112.60382)" fill="#e6e6e6"/><path d="M863.61838,356.122a9.60648,9.60648,0,0,1-9.11893-.49342,7.26935,7.26935,0,0,1-2.89955-8.33307c.99479-2.55779,3.51208-4.15948,5.95457-5.41088a60.10275,60.10275,0,0,1,17.12643-5.7211c2.84362-.492,5.85491-.76251,8.54258.28859,1.32985.52009,2.52231,1.34386,3.84231,1.8884,2.42716,1.00127,5.13481,1.00564,7.70357,1.54878a18.79677,18.79677,0,0,1,12.487,9.35563,22.64874,22.64874,0,0,1,1.93281,5.07356,29.19577,29.19577,0,0,1-.047,14.69414c-2.02023,7.62607-7.16207,14.633-6.6993,22.50855-3.80167-2.21379-5.58246-6.721-8.757-9.76672a14.41072,14.41072,0,0,0-8.66126-3.923,4.581,4.581,0,0,1-2.52888-.6439,3.94665,3.94665,0,0,1-1.1-1.98867L877.81931,363.997c-.72784-2.27975-1.60692-4.75666-3.664-5.97949a9.21924,9.21924,0,0,0-4.0912-.9942,62.29294,62.29294,0,0,0-10.21473.096" transform="translate(-212.22752 -112.60382)" fill="#2f2e41"/><path d="M871.3993,478.16175l-38.15086-14.72489,17.32563-46.68293a30.13619,30.13619,0,0,1,26.17972-19.57909h0Z" transform="translate(-212.22752 -112.60382)" fill="#e6e6e6"/><path d="M666.15327,612.38417h-419a7.5082,7.5082,0,0,1-7.5-7.5v-457a7.5082,7.5082,0,0,1,7.5-7.5h419a7.5082,7.5082,0,0,1,7.5,7.5v457A7.5082,7.5082,0,0,1,666.15327,612.38417Zm-419-469a4.50493,4.50493,0,0,0-4.5,4.5v457a4.50492,4.50492,0,0,0,4.5,4.5h419a4.50491,4.50491,0,0,0,4.5-4.5v-457a4.50492,4.50492,0,0,0-4.5-4.5Z" transform="translate(-212.22752 -112.60382)" fill="#e6e6e6"/><circle cx="121.38798" cy="188.2833" r="9.84302" fill="#e6e6e6"/><circle cx="162.40057" cy="188.2833" r="9.84302" fill="#e6e6e6"/><circle cx="203.41316" cy="188.2833" r="9.84302" fill="#80cbc4"/><circle cx="244.42575" cy="188.2833" r="9.84302" fill="#80cbc4"/><circle cx="285.43835" cy="188.2833" r="9.84302" fill="#80cbc4"/><circle cx="326.45094" cy="188.2833" r="9.84302" fill="#e6e6e6"/><circle cx="367.46353" cy="188.2833" r="9.84302" fill="#e6e6e6"/><circle cx="121.38798" cy="219.45287" r="9.84302" fill="#e6e6e6"/><circle cx="162.40057" cy="219.45287" r="9.84302" fill="#e6e6e6"/><circle cx="203.41316" cy="219.45287" r="9.84302" fill="#e6e6e6"/><circle cx="244.42575" cy="219.45287" r="9.84302" fill="#e6e6e6"/><circle cx="285.43835" cy="219.45287" r="9.84302" fill="#e6e6e6"/><circle cx="326.45094" cy="219.45287" r="9.84302" fill="#e6e6e6"/><circle cx="367.46353" cy="219.45287" r="9.84302" fill="#e6e6e6"/><circle cx="121.38798" cy="250.62243" r="9.84302" fill="#80cbc4"/><circle cx="162.40057" cy="250.62243" r="9.84302" fill="#80cbc4"/><circle cx="203.41316" cy="250.62243" r="9.84302" fill="#80cbc4"/><circle cx="244.42575" cy="250.62243" r="9.84302" fill="#e6e6e6"/><circle cx="285.43835" cy="250.62243" r="9.84302" fill="#e6e6e6"/><circle cx="326.45094" cy="250.62243" r="9.84302" fill="#e6e6e6"/><circle cx="367.46353" cy="250.62243" r="9.84302" fill="#e6e6e6"/><circle cx="121.38798" cy="281.792" r="9.84302" fill="#e6e6e6"/><circle cx="162.40057" cy="281.792" r="9.84302" fill="#e6e6e6"/><circle cx="121.38798" cy="312.96157" r="9.84302" fill="#e6e6e6"/><circle cx="162.40057" cy="312.96157" r="9.84302" fill="#e6e6e6"/><circle cx="203.41316" cy="312.96157" r="9.84302" fill="#e6e6e6"/><circle cx="203.41316" cy="281.792" r="9.84302" fill="#e6e6e6"/><circle cx="244.42575" cy="281.792" r="9.84302" fill="#80cbc4"/><circle cx="285.43835" cy="281.792" r="9.84302" fill="#80cbc4"/><circle cx="326.45094" cy="281.792" r="9.84302" fill="#80cbc4"/><circle cx="367.46353" cy="281.792" r="9.84302" fill="#e6e6e6"/><path id="a332a05d-d774-4fd2-8531-ab97682a63e9" data-name="Path 40" d="M382.14194,213.88252a5.94683,5.94683,0,0,0,0,11.89205H531.22766a5.94683,5.94683,0,1,0,.19525-11.89205q-.09762-.00167-.19525,0Z" transform="translate(-212.22752 -112.60382)" fill="#3f3d56"/><path d="M565.03665,212.22687a1.17,1.17,0,0,0,0,1.65472l5.02282,5.02287H557.67366a1.17006,1.17006,0,0,0,0,2.34012h12.38581l-5.02282,5.02287a1.17,1.17,0,1,0,1.65467,1.65472l7.0203-7.02029a1.1701,1.1701,0,0,0,0-1.65472l-7.0203-7.02029A1.17,1.17,0,0,0,565.03665,212.22687Z" transform="translate(-212.22752 -112.60382)" fill="#e6e6e6"/><path d="M348.2699,212.22687a1.17,1.17,0,0,1,0,1.65472l-5.02282,5.02287h12.38581a1.17006,1.17006,0,1,1,0,2.34012H343.24708l5.02282,5.02287a1.17,1.17,0,0,1-1.65468,1.65472l-7.02029-7.02029a1.1701,1.1701,0,0,1,0-1.65472l7.02029-7.02029A1.17,1.17,0,0,1,348.2699,212.22687Z" transform="translate(-212.22752 -112.60382)" fill="#e6e6e6"/><path d="M373.80784,498.23108a21.32655,21.32655,0,1,0,0,42.65309H539.49871a21.32655,21.32655,0,1,0,0-42.65309Z" transform="translate(-212.22752 -112.60382)" fill="#e6e6e6"/><path d="M246.5,181.14878a34.27248,34.27248,0,1,1,34.27248-34.27248A34.31124,34.31124,0,0,1,246.5,181.14878Z" transform="translate(-212.22752 -112.60382)" fill="#80cbc4"/><path d="M260.023,143.49559H249.88081V133.35326a3.38081,3.38081,0,1,0-6.76162,0v10.14233H232.97686a3.38076,3.38076,0,0,0,0,6.76152h10.14233v10.14232a3.38081,3.38081,0,0,0,6.76162,0V150.25711H260.023a3.38076,3.38076,0,1,0,0-6.76152Z" transform="translate(-212.22752 -112.60382)" fill="#fff"/></svg>
              </div>
            </div>
            <div class="col s12 l6">
              <div class="text-wrapper">
                <p class="left-align">Are you ready to create your appointment? It can be done in a matter of seconds. Click on the input field to choose a suitable date for you. Then, all the available appointments will show up. You have to re-authenticate to confirm reservation.</p>
                <br>
                <span class="badge teal lighten-3 white-text left">teal &#8250; your reservation</span>
                <span class="badge red lighten-3 white-text left">red &#8250; other reservation</span>
                <span class="badge grey lighten-3 black-text left">gray &#8250; not booked yet</span>
                <br>
              </div>
            </div>
          
          <div class="col s12 l6">
            <datepicker
            v-model="pickedDate"
            :upperLimit="to"
            :lowerLimit="from"
            :weekStartsOn="1"
            :disabledDates="{ dates: saturDays.concat(sunDays) }"
            />
          </div>
          </div>
          <h5 class="left-align">{{ pickedDate.toLocaleDateString() }} Schedule</h5>

          <!-- Free appointment slots here -->
          <div class="row">
            <div v-if="isOpenOnDate && calendar.length">
              <div v-for="(fixture, index) in calendar" :key="index" class="col s4 m3">
                <div class="slot" @click="toggleReservationModal(fixture)"
                    :class="{
                      'booked': fixture.isBooked || (ownReservation.details && new Date(Date.parse(ownReservation.date)).getTime() >= new Date(Date.now()).getTime()),
                      'red': fixture.isBooked,
                      'free': !fixture.isBooked,
                      'grey': !fixture.isBooked,
                      'lighten-3': !fixture.isBooked || fixture.isBooked,
                      'teal': fixture.isBooked && ownReservation.hours == fixture.hour && ownReservation.minutes == fixture.minutes
                      }">
                    {{fixture.hour}}:{{ ('0'+fixture.minutes).slice(-2)}}
                </div>
              </div>
            </div>
            <div v-else>
              <div class="col">
                <h5 class="left-align">We are sorry, but there are <b>no</b> free spots today. Please, feel free to <b>try</b> another date!</h5>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="create-appointment-wrapper">
            <h5>We are sorry, but you have to verify your e-mail address before you can make a reservation.</h5>
            <div class="svg-wrapper">
              <svg class="svg-item-large" id="b9d164a0-f9aa-42f6-aed8-a14c053e9183" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="883.96828" height="607.46406" viewBox="0 0 883.96828 607.46406"><path d="M930.734,274.34051h-.12466l-71.4901,30.52657-97.81319,41.767a3.15484,3.15484,0,0,1-2.41645.01245L657.97519,304.77988l-73.2464-30.38956-.1119-.04981h-.12467a4.364,4.364,0,0,0-4.35916,4.35916V468.01173a4.364,4.364,0,0,0,4.35916,4.35916H930.734a4.364,4.364,0,0,0,4.35916-4.35916V278.69967A4.364,4.364,0,0,0,930.734,274.34051Z" transform="translate(-158.01586 -146.26797)" fill="#fff"/><path d="M931.04481,275.586a.62087.62087,0,0,1-.35546-.1116L758.46588,155.53305a3.12331,3.12331,0,0,0-3.56736.00608L583.91566,275.47318a.62286.62286,0,0,1-.71532-1.01986l170.983-119.934a4.373,4.373,0,0,1,4.99436-.00821l172.22344,119.941a.62286.62286,0,0,1-.35638,1.13388Z" transform="translate(-158.01586 -146.26797)" fill="#3f3d56"/><polygon points="435.67 133.57 598.834 12.645 763.237 142.174 607.241 234.65 522.549 215.346 435.67 133.57" fill="#e6e6e6"/><path d="M687.71423,438.03708h-80.6073a3.76592,3.76592,0,0,1-.01113-7.53184h80.61843a3.76592,3.76592,0,0,1,.01113,7.53184Z" transform="translate(-158.01586 -146.26797)" fill="#80cbc4"/><path d="M636.027,421.84591h-28.9201a3.76592,3.76592,0,0,1-.01113-7.53183H636.027a3.76592,3.76592,0,1,1,.01114,7.53183Z" transform="translate(-158.01586 -146.26797)" fill="#80cbc4"/><path d="M759.145,347.19121a4.7102,4.7102,0,0,1-1.78672-.35L656.72972,305.08743V174.39112a4.36425,4.36425,0,0,1,4.35915-4.35916H854.13736a4.36426,4.36426,0,0,1,4.35916,4.35916V305.17865l-.18913.08089-97.32152,41.56129A4.74288,4.74288,0,0,1,759.145,347.19121Z" transform="translate(-158.01586 -146.26797)" fill="#fff"/><path d="M759.145,347.50227a5.0265,5.0265,0,0,1-1.90531-.37279L656.41835,305.2954V174.39109a4.67581,4.67581,0,0,1,4.67052-4.67052H854.13736a4.67582,4.67582,0,0,1,4.67053,4.67052V305.38421L761.10811,347.107A5.05005,5.05005,0,0,1,759.145,347.50227ZM657.66378,304.46348,757.71464,345.978a3.81,3.81,0,0,0,2.90695-.01733L857.56241,304.562V174.39109a3.42912,3.42912,0,0,0-3.42505-3.425H661.08887a3.42912,3.42912,0,0,0-3.42505,3.425Z" transform="translate(-158.01586 -146.26797)" fill="#3f3d56"/><path d="M929.79979,274.34051h-.12466L858.185,304.86708l-97.81319,41.767a3.15484,3.15484,0,0,1-2.41645.01245L657.041,304.77988l-73.2464-30.38956-.1119-.04981H583.558a4.364,4.364,0,0,0-4.35916,4.35916V468.01173a4.364,4.364,0,0,0,4.35916,4.35916H929.79979a4.364,4.364,0,0,0,4.35916-4.35916V278.69967A4.364,4.364,0,0,0,929.79979,274.34051Zm3.11369,193.67122a3.11492,3.11492,0,0,1-3.11369,3.11369H583.558a3.11494,3.11494,0,0,1-3.11369-3.11369V278.69967a3.12057,3.12057,0,0,1,2.99541-3.11368L657.041,306.125l100.4352,41.67357a4.43441,4.43441,0,0,0,3.38765-.01868L858.185,306.21844,929.92446,275.586a3.12378,3.12378,0,0,1,2.989,3.11368Z" transform="translate(-158.01586 -146.26797)" fill="#3f3d56"/><path d="M743.47888,218.88666H674.9778a4.9819,4.9819,0,0,1,0-9.96379h68.50108a4.9819,4.9819,0,0,1,0,9.96379Z" transform="translate(-158.01586 -146.26797)" fill="#80cbc4"/><path d="M707.98287,197.7136H674.9778a4.98189,4.98189,0,0,1,0-9.96379h33.00507a4.98189,4.98189,0,0,1,0,9.96379Z" transform="translate(-158.01586 -146.26797)" fill="#80cbc4"/><path d="M808.84666,268.70562H704.22683a4.9819,4.9819,0,0,1,0-9.96379H808.84666a4.9819,4.9819,0,0,1,0,9.96379Z" transform="translate(-158.01586 -146.26797)" fill="#ccc"/><path d="M808.84666,291.7469H704.22683a4.9819,4.9819,0,0,1,0-9.9638H808.84666a4.9819,4.9819,0,0,1,0,9.9638Z" transform="translate(-158.01586 -146.26797)" fill="#ccc"/><circle cx="769.85304" cy="129.87784" r="47.37136" fill="#80cbc4"/><polygon points="765.339 149.875 751.161 131.644 759.406 125.231 766.119 133.863 788.798 109.922 796.382 117.107 765.339 149.875" fill="#fff"/><path d="M397.78109,556.12072a10.05581,10.05581,0,0,1,4.214-14.83234l-3.08079-35.60179,16.326,8.84847.42262,32.45151a10.11027,10.11027,0,0,1-17.8818,9.13415Z" transform="translate(-158.01586 -146.26797)" fill="#9f616a"/><path d="M400.87455,533.59824l-.13257-.33593-18.01172-45.50293-2.85791-86.25293.48-.03418a26.46617,26.46617,0,0,1,28.32056,25.11328l2.6416,46.374,7.48852,59.64258Z" transform="translate(-158.01586 -146.26797)" fill="#e5e5e5"/><polygon points="127.8 577.505 138.154 584.07 168.401 547.255 153.119 537.567 127.8 577.505" fill="#9f616a"/><path d="M285.31764,718.7182l20.39154,12.92748.00083.00052a15.3873,15.3873,0,0,1,4.756,21.23348l-.26773.42227-33.38677-21.16611Z" transform="translate(-158.01586 -146.26797)" fill="#2f2e41"/><polygon points="225.692 595.15 237.952 595.149 243.784 547.861 225.69 547.862 225.692 595.15" fill="#9f616a"/><path d="M380.58082,737.41524l24.144-.001h.001a15.38731,15.38731,0,0,1,15.38648,15.38623v.5l-39.53077.00146Z" transform="translate(-158.01586 -146.26797)" fill="#2f2e41"/><path d="M349.01908,543.28431,377.8814,716.88646s-5.67783,14.19459,2.83892,16.0872,27.44285-1.89261,27.44285-1.89261,5.67784-14.19459-2.83891-16.0872l-16.0872-181.38868Z" transform="translate(-158.01586 -146.26797)" fill="#2f2e41"/><path d="M366.05258,546.38029l-19.99536,81.17409-50.97755,74.02s-18.92611,1.89262-8.51675,12.302S301.70381,725.232,301.70381,725.232s16.08719-1.89261,15.14088-9.463l62.67343-73.77085,29.11821-98.45675Z" transform="translate(-158.01586 -146.26797)" fill="#2f2e41"/><path d="M348.60331,553.52891l-4.82886-27.55762c-7.272-7.60059,6.46826-26.3916,8.00024-28.43262l-.89892-11.68554a3.50739,3.50739,0,0,1-1.99268-1.085c-4.511-4.60058-4.208-22.751-4.19287-23.52148L339.712,409.46152l12.38574-7.22558,31.322-1.00977L398.7161,414.483l14.73267,135.35156-.52539.0293Z" transform="translate(-158.01586 -146.26797)" fill="#e5e5e5"/><path d="M359.44328,563.19434a10.05575,10.05575,0,0,1-2.443-15.22456l-17.82547-30.97147,18.53545,1.12735,14.08568,29.23819a10.11028,10.11028,0,0,1-12.35262,15.83049Z" transform="translate(-158.01586 -146.26797)" fill="#9f616a"/><path d="M343.65751,534.233,328.281,498.58945l-2.56982-72.81152a13.09764,13.09764,0,0,1,6.60693-11.8623l17.73877-10.83985,3.82715,76.544L365.3306,525.3668Z" transform="translate(-158.01586 -146.26797)" fill="#e5e5e5"/><circle cx="213.23836" cy="226.04429" r="22.00839" fill="#9f616a"/><path d="M379.212,339.81577c-22.1648-6.39172-28.4563,11.97907-28.4563,11.97907-10.68384,7.08807-3.99487,15.97473-3.99487,15.97473-2.6958.59881,2.69433,16.37457,4.4917,15.97534.959-.21307,3.425,2.73059,5.5166,5.52228a11.0696,11.0696,0,0,1,2.13672.20538l-4.05811-15.01288s13.67871-2.09564,17.87256-8.68506c4.01245-6.30419,17.22119-8.29455,20.98022-4.08361a9.50485,9.50485,0,0,1,1.34058-3.40387,6.80081,6.80081,0,0,1,1.971-1.97608C393.68851,342.18711,379.212,339.81577,379.212,339.81577Z" transform="translate(-158.01586 -146.26797)" fill="#2f2e41"/><polyline points="196.224 305.464 194.996 349.275 210.238 381.401 196.224 304.299" opacity="0.2"/><path d="M540.01586,753.732h-381a1,1,0,1,1,0-2h381a1,1,0,0,1,0,2Z" transform="translate(-158.01586 -146.26797)" fill="#3f3d56"/><path d="M487.35223,193.54645a1.99891,1.99891,0,0,0-2.99778,1.99087l1.54384,11.32333a1.29955,1.29955,0,0,1-.03357.49905,1.22138,1.22138,0,0,1-.23734.43608l-8.64673,10.24363a1.95391,1.95391,0,0,0-.12721,2.41351l.00908.01314a1.95123,1.95123,0,0,0,2.28266.752l6.24446-2.1195a1.20226,1.20226,0,0,1,1.20761.27169,1.16219,1.16219,0,0,1,.37242.85434l.24409,22.24892a1.984,1.984,0,0,0,.87415,1.62894,2.004,2.004,0,0,0,1.83248.2134l46.6071-17.82452a1.99756,1.99756,0,0,0,.30651-3.58642l-.63455-.37689-48.84721-28.98158Zm-2.20874,1.88208a1.20067,1.20067,0,0,1,1.8019-1.19268L535.777,223.20879l.65006.38537a1.20112,1.20112,0,0,1-.18261,2.151l-46.60706,17.82454a1.19819,1.19819,0,0,1-1.62406-1.10553l-.244-22.24873a1.91512,1.91512,0,0,0-.1118-.646l47.45031,5.45193a.79968.79968,0,0,0,.47957-1.49692.69588.69588,0,0,0-.125-.0544L486.7016,207.1936a1.97024,1.97024,0,0,0-.01428-.44177l-1.54385-11.32329Z" transform="translate(-158.01586 -146.26797)" fill="#f1f1f1"/><path d="M487.35223,193.54645a1.99891,1.99891,0,0,0-2.99778,1.99087l1.54384,11.32333a1.29955,1.29955,0,0,1-.03357.49905,1.22138,1.22138,0,0,1-.23734.43608l-8.64673,10.24363a1.95391,1.95391,0,0,0-.12721,2.41351l.00908.01314a1.95123,1.95123,0,0,0,2.28266.752l6.24446-2.1195a1.20226,1.20226,0,0,1,1.20761.27169,1.16219,1.16219,0,0,1,.37242.85434l.24409,22.24892a1.984,1.984,0,0,0,.87415,1.62894,2.004,2.004,0,0,0,1.83248.2134l46.6071-17.82452a1.99756,1.99756,0,0,0,.30651-3.58642l-.63455-.37689-48.84721-28.98158Zm-2.20874,1.88208a1.20067,1.20067,0,0,1,1.8019-1.19268L535.777,223.20879l.65006.38537a1.20112,1.20112,0,0,1-.18261,2.151l-46.60706,17.82453a1.19819,1.19819,0,0,1-1.62405-1.10553l-.24405-22.24875a1.91516,1.91516,0,0,0-.1118-.646,1.94312,1.94312,0,0,0-.5119-.78227c-.03153-.03154-.06634-.06083-.10123-.09025l-.00222-.00321a1.99249,1.99249,0,0,0-1.90795-.35062l-6.24773,2.12177a1.16242,1.16242,0,0,1-1.36924-.45629l-.00455-.00658a1.15986,1.15986,0,0,1,.07714-1.44692l8.64685-10.24347a1.88917,1.88917,0,0,0,.23875-.3498l.0033-.00226a1.91585,1.91585,0,0,0,.15205-.37685,1.857,1.857,0,0,0,.07088-.389,1.97017,1.97017,0,0,0-.01428-.44176l-1.54386-11.32332Z" transform="translate(-158.01586 -146.26797)" fill="#e5e5e5"/><path d="M486.70158,207.19358,535.46233,223.47a.69687.69687,0,0,1,.125.05439.79969.79969,0,0,1-.47957,1.49693l-47.45032-5.452-.83795-.09542.09278-.79248.1298.01218.00222.0032,48.154,5.5288-48.71965-16.26619-.0033.00226-.21056-.07271.25288-.75767Z" transform="translate(-158.01586 -146.26797)" fill="#e5e5e5"/><path d="M1031.1283,146.54645,982.28109,175.528l-.63455.37689a1.99756,1.99756,0,0,0,.30651,3.58642l46.6071,17.82452a2.004,2.004,0,0,0,1.83248-.2134,1.984,1.984,0,0,0,.87415-1.62894l.24409-22.24892a1.16219,1.16219,0,0,1,.37242-.85434,1.20226,1.20226,0,0,1,1.20761-.27169l6.24446,2.1195a1.95123,1.95123,0,0,0,2.28266-.752l.00908-.01314a1.95391,1.95391,0,0,0-.12721-2.41351l-8.64673-10.24363a1.22138,1.22138,0,0,1-.23734-.43608,1.29956,1.29956,0,0,1-.03358-.49905l1.54385-11.32333a1.99891,1.99891,0,0,0-2.99778-1.99087Zm2.20877,1.88209-1.54385,11.32329a1.97024,1.97024,0,0,0-.01428.44177L983.01818,176.47a.69588.69588,0,0,0-.125.0544.79968.79968,0,0,0,.47957,1.49692l47.45031-5.45193a1.91512,1.91512,0,0,0-.1118.646l-.244,22.24873a1.19819,1.19819,0,0,1-1.62406,1.10553l-46.60706-17.82454a1.20112,1.20112,0,0,1-.18261-2.151l.65006-.38537,48.83158-28.97294a1.20067,1.20067,0,0,1,1.8019,1.19268Z" transform="translate(-158.01586 -146.26797)" fill="#f1f1f1"/><path d="M1031.1283,146.54645,982.28109,175.528l-.63455.37689a1.99756,1.99756,0,0,0,.30651,3.58642l46.6071,17.82452a2.004,2.004,0,0,0,1.83248-.2134,1.984,1.984,0,0,0,.87415-1.62894l.24409-22.24892a1.16219,1.16219,0,0,1,.37242-.85434,1.20226,1.20226,0,0,1,1.20761-.27169l6.24446,2.1195a1.95123,1.95123,0,0,0,2.28266-.752l.00908-.01314a1.95391,1.95391,0,0,0-.12721-2.41351l-8.64673-10.24363a1.22138,1.22138,0,0,1-.23734-.43608,1.29956,1.29956,0,0,1-.03358-.49905l1.54385-11.32333a1.99891,1.99891,0,0,0-2.99778-1.99087Zm2.20877,1.88209-1.54386,11.32332a1.97017,1.97017,0,0,0-.01428.44176,1.857,1.857,0,0,0,.07088.389,1.91585,1.91585,0,0,0,.15205.37685l.0033.00226a1.88917,1.88917,0,0,0,.23875.3498l8.64685,10.24347a1.15986,1.15986,0,0,1,.07714,1.44692l-.00455.00658a1.16242,1.16242,0,0,1-1.36924.45629l-6.24773-2.12177a1.99249,1.99249,0,0,0-1.908.35062l-.00222.00321c-.03489.02942-.0697.05871-.10123.09025a1.94312,1.94312,0,0,0-.5119.78227,1.91516,1.91516,0,0,0-.1118.646l-.24405,22.24875a1.19819,1.19819,0,0,1-1.624,1.10553l-46.60706-17.82453a1.20112,1.20112,0,0,1-.18261-2.151l.65006-.38537,48.83158-28.97294a1.20067,1.20067,0,0,1,1.8019,1.19268Z" transform="translate(-158.01586 -146.26797)" fill="#e5e5e5"/><path d="M1031.96287,160.13132l.25288.75767-.21056.07271-.0033-.00226-48.71965,16.26619,48.154-5.5288.00222-.0032.1298-.01218.09278.79248-.83795.09542-47.45032,5.452a.79969.79969,0,0,1-.47957-1.49693.69687.69687,0,0,1,.125-.05439l48.76074-16.2764Z" transform="translate(-158.01586 -146.26797)" fill="#e5e5e5"/><path d="M613.1421,551.48955a1.99891,1.99891,0,0,0,.08063,3.59774l10.39574,4.74657a1.29963,1.29963,0,0,1,.40386.29508,1.22139,1.22139,0,0,1,.24174.43366l4.03707,12.7828a1.95394,1.95394,0,0,0,1.972,1.39736l.016-.00067a1.95122,1.95122,0,0,0,1.85552-1.52744l1.54574-6.41064a1.20226,1.20226,0,0,1,.875-.87549,1.16217,1.16217,0,0,1,.92113.1418l18.93561,11.684a1.98394,1.98394,0,0,0,1.844.1317,2.004,2.004,0,0,0,1.15968-1.43479l9.84234-48.91895a1.99757,1.99757,0,0,0-2.86749-2.17574l-.65768.33491L613.1421,551.48954Zm.41036,2.87269a1.20067,1.20067,0,0,1-.0451-2.16039l50.58517-25.78946.67313-.34349a1.20111,1.20111,0,0,1,1.72043,1.30387L656.6438,576.2917a1.19819,1.19819,0,0,1-1.80235.78186l-18.93542-11.684a1.91519,1.91519,0,0,0-.60576-.25074l29.96662-37.19216a.79968.79968,0,0,0-1.00893-1.20533.6958.6958,0,0,0-.11278.07656l-39.816,32.51493a1.96963,1.96963,0,0,0-.381-.224l-10.39571-4.74655Z" transform="translate(-158.01586 -146.26797)" fill="#f1f1f1"/><path d="M613.1421,551.48955a1.99891,1.99891,0,0,0,.08063,3.59774l10.39574,4.74657a1.29963,1.29963,0,0,1,.40386.29508,1.22139,1.22139,0,0,1,.24174.43366l4.03707,12.7828a1.95394,1.95394,0,0,0,1.972,1.39736l.016-.00067a1.95122,1.95122,0,0,0,1.85552-1.52744l1.54574-6.41064a1.20226,1.20226,0,0,1,.875-.87549,1.16217,1.16217,0,0,1,.92113.1418l18.93561,11.684a1.98394,1.98394,0,0,0,1.844.1317,2.004,2.004,0,0,0,1.15968-1.43479l9.84234-48.91895a1.99757,1.99757,0,0,0-2.86749-2.17574l-.65768.33491L613.1421,551.48954Zm.41036,2.87269a1.20067,1.20067,0,0,1-.0451-2.16039l50.58517-25.78946.67313-.34349a1.20111,1.20111,0,0,1,1.72043,1.30387l-9.8423,48.91892a1.19819,1.19819,0,0,1-1.80235.78186l-18.93544-11.684a1.91519,1.91519,0,0,0-.60576-.25074,1.94318,1.94318,0,0,0-.93476.01459c-.04351.0098-.08687.02358-.13039.03734l-.00389.00016a1.99248,1.99248,0,0,0-1.316,1.42525l-1.54558,6.41461a1.16244,1.16244,0,0,1-1.11741.91346l-.008.00032a1.15986,1.15986,0,0,1-1.18174-.83847l-4.03687-12.78281a1.89,1.89,0,0,0-.16806-.38874l-.00015-.004a1.91524,1.91524,0,0,0-.23726-.32991,1.85747,1.85747,0,0,0-.29092-.26781,1.97042,1.97042,0,0,0-.381-.224l-10.39573-4.74655Z" transform="translate(-158.01586 -146.26797)" fill="#e5e5e5"/><path d="M624.32916,559.33283l39.816-32.51492a.6965.6965,0,0,1,.11278-.07657.79968.79968,0,0,1,1.00893,1.20533l-29.96665,37.19216-.52846.65726-.62023-.50194.07965-.1032.0039-.00016,30.40767-37.74588-39.78538,32.48565.00015.004-.174.13911-.50525-.61865Z" transform="translate(-158.01586 -146.26797)" fill="#e5e5e5"/></svg>
            </div>
        </div>
      </div>
    </div>

    <!-----------------------------------------------------
                  Reservation verifying modal 
    ------------------------------------------------------>
    <transition name="fade">
        <div class="modal-overlay1" v-if="showReservationModal" @click="closeReservationModal"></div>
    </transition>
    <transition name="slide">
        <div class="custom-modal login-modal" v-if="showReservationModal">
            <h5>{{ modalTitle }}</h5>
            <p>{{ modalSubtitle }}</p>
            <p><b>Date: {{ pickedDate.toLocaleDateString() }}</b>
            <br>
            <b>Time: {{ newBooking.fixture.hour }}:{{ newBooking.fixture.minutes==0?'00':newBooking.fixture.minutes }}</b></p>
            <div class="row">
              <form id="verification-form" class="col s12" @submit.prevent="reauthenticateAndDoBooking">
                <div class="input-field col s12 center-align">
                    <input type="password" id="verification-password" required>
                    <label for="verification-password">Password</label>
                  <button class="waves-effect waves-light btn-small left teal lighten-3">{{ buttonText }}</button>
                </div>
                </form> 
            </div>
            <i class="material-icons close-trigger grey-text text-lighten-1" @click="closeReservationModal">close</i>      
        </div>
    </transition>

  </div>
</template>

<script>
import Datepicker from 'vue3-datepicker'
import { ref } from 'vue'
import {mapState, mapActions, mapGetters} from 'vuex';
import firebase from 'firebase/app'
import schedule from '../config/schedule'

export default {
  data(){
    return{
      pickedDate: ref(new Date()),
      from: new Date(Date.now()),
      to: new Date(Date.now() + 1814400000),
      schedule: schedule.hours,
      newBooking: {
        name: '',
        email: '',
        phone: '',
        fixture: {}
      },
      isBooking: false,
      showReservationModal: false,
      modalTitle: 'Verify password',
      modalSubtitle: 'You have to re-authenticate to confirm reservation',
      buttonText: 'Reserve spot!'
    }
  },
  components:{
    Datepicker
  },
  methods: {
    ...mapActions([
      'create',
      'cancel',
      'getReservations'
    ]),
    toggleReservationModal: function(fixture) {
      if(fixture.isBooked) return;
      this.newBooking = {
        name: '',
        uid: '',
        email: '',
        phone: '',
        fixture: fixture
      };
      this.showReservationModal = !this.showReservationModal;
    },
    closeReservationModal: function(){
      this.showReservationModal = false;
    },
    doBooking: function(){
      this.isBooking = true;
      //CREATE BOOKING
      let date = new Date(this.pickedDate.toDateString() + ' 12:00:00');
      date.setHours(this.newBooking.fixture.hour, this.newBooking.fixture.minutes, 0);
      let payload = {
        name: this.userData.firstName + " " + this.userData.lastName,
        uid: this.userCredentials.uid,
        email: this.userCredentials.email,
        phone: this.userData.phone,
        date: date
      };
      this.create(payload).then(code => {
        this.generatedCode = code;     
        this.isBooking = false;
        this.getReservations();
      });
    },
    cancelReservation(booking){
      this.cancel(booking);
    },
    // doBooking is called inside...
    reauthenticateAndDoBooking: function(){
      const verificationForm = document.querySelector('#verification-form');
      // user information
      let user = firebase.auth().currentUser;
      const password = verificationForm['verification-password'].value;

      const credential = firebase.auth.EmailAuthProvider.credential(
        user.email, 
        password
      );

      user.reauthenticateWithCredential(credential).then(() => {
        // User re-authenticated.
        // console.log('re-auth');
        this.doBooking();

      }).then(() => {
        // reset form
        verificationForm.reset();
        // close modal
        this.showReservationModal = false;
      })
      .catch(function(error) {
        // An error happened.
        console.log(error.message);
      });
    } 
  },
  computed: {
    ...mapGetters({
      // map `this.user` to `this.$store.getters.user`
      user: "user",
      userCredentials: "userCredentials",
      userData: "userData"
    }),
    // sundays of the current year
    sunDays: function(){
      let result = [];
      // current year
      let year = new Date().getFullYear();
      // january the 1st
      let firstDay = new Date(year, 0, 1);
      // which day of the week is january 1st
      let day = firstDay.getDay();
      //  if it is not sunday
      if(day != 0)
        // the first sunday will be another calculated date
        firstDay.setDate(firstDay.getDate()+(7-day));
      
      // first element of the array is the first sunday
      result[0] = firstDay;
      let i = 1;
      
      while(firstDay.getFullYear() == year){        
        result[i] = firstDay.setDate(firstDay.getDate() + 7);
        i++;
      } 
      // console.log(result);
      return result;
    },
    // saturdays of the current year
    saturDays: function(){
      let result = [];
      let year = new Date().getFullYear();
      let firstDay = new Date(year, 0, 1);
      let day = firstDay.getDay();

      if(day != 6)
        firstDay.setDate(firstDay.getDate()+(6-day));

      // console.log(firstDay);
      
      result[0] = firstDay;
      let i = 1;
      while(firstDay.getFullYear() == year){       
        result[i] = firstDay.setDate(firstDay.getDate() + 7);
        i++;
      } 
      return result;
    },
    ...mapState([
      'reservations'
    ]),
    ownReservation: function(){
      let hours = '';
      let minutes = '';
      let monthName = '';
      let day = '';
      let date = new Date();
      let details = '';
      this.reservations.forEach(element => {
        if(this.userData && element.code == this.userData.currentAppointmentCode){
          const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
          ];
          date = new Date(element.date.seconds * 1000);
          hours = date.getHours();
          minutes = ("0" + date.getMinutes()).substr(-2);
          monthName = monthNames[date.getMonth()];
          day = date.getDate();
          details = element;
        }
      });
      return{
        hours,
        minutes,
        monthName,
        details,
        day,
        date
      };
    },
    isOpenOnDate() {
      return schedule.openingDays.includes(this.pickedDate.getDay());
    },
    // retrieve remaining reservation spots for the chosen day
    calendar: function () {
        let calendar = [];
        this.schedule.forEach(hour => {
          let date = new Date(this.pickedDate.toDateString() + ' 12:00:00');
          date.setHours(hour.hour, hour.minutes, 0);
          if (date >= new Date()) {
            let reservation = this.reservations.filter(x => {
              return x.date.seconds === (date.getTime() / 1000)
            });
            calendar.push({
              hour: hour.hour,
              minutes: hour.minutes,
              isBooked: reservation.length === 1
            });
          }
        });
        return calendar;
    },
  },
  created(){
    this.getReservations();
  }
}
</script>

<style lang="scss">
.modal{
  border-radius: 15px !important;
}

.create-appointment-wrapper{
  --vdp-selected-bg-color: #80cbc4;
  --vdp-hover-bg-color: #26a69a;
  --vdp-border-radius: 15px;
  --vdp-heading-size: 5em;
  --vdp-elem-font-size: 1.1em;
  --vdp-elem-border-radius: 5px;

  background-color: white;
  padding: 15px !important;
  margin-bottom: 15px;
  -webkit-box-shadow: 5px 5px 18px -2px rgba(0,0,0,0.15); 
  box-shadow: 5px 5px 18px -2px rgba(0,0,0,0.15); 
  border-radius: 15px;

 .v3dp__heading__center{
   font-size: 1.5em;
 }

 button{
   margin-top: 15px;
 }
}

.svg-wrapper{
  padding: 15px 0;
  .svg-item{
    width: 230px;
    height: auto;
  }
  .svg-item-large{
    width: 90%;
    max-width: 400px;
    height: auto;
  }
}

.v3dp__popout[data-v-2e128338]{
  position: fixed !important;
  top: 50vh !important;
  left: 50vw !important;
  transform: translate(-50%, -50%);
  z-index: 99;
  padding: 10px;
  width: 90%;
  max-width: 400px !important;
  -webkit-box-shadow: 0px 0px 100vh 100vw rgba(0,0,0,0.25); 
  box-shadow: 0px 0px  100vh 100vw rgba(0,0,0,0.25);
}

h5{
  margin-bottom: 15px !important;
}

.text-wrapper{
  padding: 15px 0;
}

.free{
  cursor: pointer;
}

.booked{
  pointer-events: none;
}

.slot{
  padding: 10px;
  border-radius: 5px;
  margin: 5px 0;
  font-weight: bold;
}

.badge{
  margin: 3px 0;
  padding: 0px;
}
</style>