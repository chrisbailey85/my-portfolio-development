import { annotate, annotationGroup } from 'https://unpkg.com/rough-notation?module';
const underline = document.querySelectorAll(".section-heading");
underline.forEach(underline => {
    const annotation = annotate(underline, { type: 'underline', padding: [ 0, 10, 10, 10] });
    annotation.show();
});