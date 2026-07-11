from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import mm
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle

out = 'public/revanth-temididapati-resume.pdf'
doc = SimpleDocTemplate(out, pagesize=A4, rightMargin=18*mm, leftMargin=18*mm, topMargin=16*mm, bottomMargin=14*mm)
styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name='Name', fontName='Helvetica-Bold', fontSize=25, leading=29, textColor=colors.HexColor('#292740'), spaceAfter=3))
styles.add(ParagraphStyle(name='Role', fontName='Helvetica', fontSize=10, leading=14, textColor=colors.HexColor('#55516B'), spaceAfter=12))
styles.add(ParagraphStyle(name='Section', fontName='Helvetica-Bold', fontSize=10, leading=13, textColor=colors.HexColor('#E86182'), spaceBefore=10, spaceAfter=5))
styles.add(ParagraphStyle(name='Body2', fontName='Helvetica', fontSize=9.2, leading=13, textColor=colors.HexColor('#2A2935'), spaceAfter=4))
styles.add(ParagraphStyle(name='Job', fontName='Helvetica-Bold', fontSize=10, leading=13, textColor=colors.HexColor('#292740')))

story = [Paragraph('REVANTH TEMIDIDAPATI', styles['Name']), Paragraph('Software Development Engineer | Web, Cloud & Embedded Systems', styles['Role'])]
story += [Paragraph('Bengaluru, India | revanth.sharma5198@gmail.com | linkedin.com/in/revanthtemididapati | github.com/revanth2412', styles['Body2'])]
story += [Paragraph('PROFILE', styles['Section']), Paragraph('Self-taught software engineer with a passion for building clean web products and inventive embedded prototypes. Experienced in turning ambitious concepts into useful proof of concepts across automotive systems, backend services, and product interfaces.', styles['Body2'])]
story += [Paragraph('EXPERIENCE', styles['Section'])]
story += [Paragraph('Software Development Engineer - Bosch Global Software Technologies | Mar 2022 - Present', styles['Job']), Paragraph('Rapid prototyping for innovation projects in the two-wheeler domain. Develop bespoke embedded software for EPM44 ECU customer needs and contribute to sensorless quickshifters, intelligent puncture detection, and MTB traction control concepts. Contribute technical expertise to departmental Bosch Connect pages and branding activities.', styles['Body2'])]
story += [Paragraph('Trainee - Cognizant | Aug 2021 - Feb 2022', styles['Job']), Paragraph('Completed professional training focused on software engineering foundations, team collaboration, and applied delivery practices.', styles['Body2'])]
story += [Paragraph('SELECTED PROJECTS', styles['Section']), Paragraph('<b>Pixel Crop:</b> AI background-removal SaaS with Razorpay payments. <b>Easily:</b> job application platform using MVC, JWT, file handling and recruiter workflows. <b>Task Tracking:</b> React, Node.js, MongoDB, Docker, and Azure Container Services. <b>SocialMedia Backend:</b> authentication, posts, comments, likes and password recovery.', styles['Body2'])]
story += [Paragraph('SKILLS', styles['Section']), Paragraph('<b>Web & Cloud:</b> React.js, Node.js, Express, JavaScript, MongoDB, Mongoose, MySQL, Azure, Docker, Git. <br/><b>Embedded:</b> Embedded C, CAN, CAPL, ASCET, ASPICE. <br/><b>Languages:</b> C, JavaScript, Python.', styles['Body2'])]
story += [Paragraph('CERTIFICATIONS, AWARDS & PUBLICATION', styles['Section']), Paragraph('Microsoft Certified: Azure Fundamentals (Aug 2024) | Cambridge Assessment Preliminary English Test (Apr 2018) | Best Tyro, Crowd Sourcing Champ, Growth Driver (BGSW 2WP Ideathon winner), Bravo | IEEE publication: Ultra-Low Power m-Sequence Code Generator using New XOR Gate for Body Sensor Node Applications (2019).', styles['Body2'])]
story += [Paragraph('EDUCATION', styles['Section']), Paragraph('<b>Vignan\'s Foundation for Science, Technology & Research</b> - B.Tech, 2017-2021 | GPA 9.2 / 10', styles['Body2'])]
doc.build(story)
