import { task, src, dest } from 'gulp';
import autoprefixer from 'gulp-autoprefixer';

task('styles', ()=>{
    src('styles/styles.css')
        .pipe(autoprefixer())
        .pipe(dest('build'));
});