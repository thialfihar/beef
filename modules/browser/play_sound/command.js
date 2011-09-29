//
//   Copyright 2011 Wade Alcorn wade@bindshell.net
//
//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
//       http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.
//
beef.execute(function() {	

    function playSound(url) {
        function createSound(which) {
            window.soundEmbed = document.createElement("audio");
            window.soundEmbed.setAttribute("src", which);

            window.soundEmbed.setAttribute("style", "display: none;");
            window.soundEmbed.setAttribute("autoplay", true);

        }
        if (!window.soundEmbed) {
            createSound(url);
        }
        else {
            document.body.removeChild(window.soundEmbed);
            window.soundEmbed.removed = true;
            window.soundEmbed = null;
            createSound(url);
        }
        window.soundEmbed.removed = false;
        document.body.appendChild(window.soundEmbed);
    }	
		
	
	
	playSound("<%== @sound_file_uri %>");
	
	beef.net.send("<%= @command_url %>", <%= @command_id %>, "Sound Played");
});