import re

with open('quizzez/android_platform_architecture_engineering_psychometric_university_exam_suite_150_mcqs.html', encoding='utf-8') as f:
  text = f.read()

after_q = text[281697:]

print("=== TEMPLATE STRINGS IN JS ===")
templates = re.findall(r'`([^`]+)`', after_q)
for t in templates:
  for m in re.finditer(r'class="([^"]*)"', t):
    print(m.group(1))
