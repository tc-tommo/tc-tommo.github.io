
# PlayerData Firmware Intern [🔗](link)

I'm a keen gymnast and strength coach for the University of Edinburgh Gymnastics Club. Since starting university in 2019 and with no prior ability or talent in gymnastics, I have grown passionate about both gymnastics as well as strength and conditioning. I wondered how I could use knowledge of technology to gain insight into sport performance. This led me to tinker with wiimotes and other motion capture devices strapped to myself and friends to capture gymnastics skills in order to understand load forces during high impact movement.

For this reason, I was encouraged to apply for an internship at PlayerData at a careers fair.

## What is PlayerData?

PlayerData is a company that develops devices to support coaches and athletes in improving performance in team sports. It aims to democratise access to data in sport, allowing small teams to get the same quality of data as the premier league teams.

## Technologies Used

- C
- Zephyr RTOS
- Ublox GPS
- QEMU


## What did I do?

PlayerData uses a custom embedded device slid into a vest worn by the athlete. When a new driver version was developed, a physical development board was required, which would often be soft-bricked from malconfiguration.

I was tasked with creating a firmware emulator for the PlayerData device which is used to capture athlete data. This would enable the company to more easily test new features in the driver code without risking any physical hardware.

At the time of the internship, GPT-3 had been available to the public for 3 months and I was excited to see how it could be used to accelerate my workflow. Through the 13 weeks of the internship, I found a workflow which allowed me to reliably convert protocol specifications from chip manufacturer datasheets into emulation code which contained minimal errors.

## What did I learn?

During this time, I gained a lot of experience with the Zephyr RTOS and the Ublox GPS module. I also gained insight into very low level performance optimsations. Including [this technique](https://www.catb.org/esr/structure-packing/); a lost art of programmers in the 1990s which can save 80% of the memory footprint of driver code.

## What was the hardest part?

The hardest part of the internship was the self-directed nature of the project. I had to seek answers proactively and dive into the deep end of operating systems and embedded programming.



