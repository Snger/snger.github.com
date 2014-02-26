module.exports = function(grunt) {

    var time = new Date(),
        Y = time.getFullYear().toString(),
        M = ((time.getMonth() + 1) < 10 ? '0' + (time.getMonth() + 1) : (time.getMonth() + 1)).toString(),
        D = (time.getDate() < 10 ? '0' + time.getDate() : time.getDate()).toString(),
        H = (time.getHours() < 10 ? '0' + time.getHours() : time.getHours()).toString(),
        m = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();

    var date = Y + M + D + H + m;

    grunt.initConfig({ //配置
        pkg: grunt.file.readJSON('package.json'),
        date: date,
        paths: { //配置各个项目的www路径 以该文件所在位置为根目录
            pinetheme: {
                css: 'themes/pinetheme/source/css'
            }
        },

        less: { //配置less任务 管理less代码
            options: { //配置less任务选项(全局)
                dumpLineNumbers: 'comments',
                compress: true
            },
            tbv3: {
                options: {
                    compress: false
                },
                files: [{
                    expand: true,
                    cwd: '<%= paths.tbv3 %>/css/tb/<%= ver.tbv3.css%>/<%= moduleName.tbv3 %>/', //指定文件路径
                    src: ['*.less'], //指定文件
                    dest: '<%= paths.tbv3 %>/css/tb/<%= ver.tbv3.css%>/<%= moduleName.tbv3 %>/', //指定处理后存储路径
                    ext: '.css' //指定处理后的文件后缀
                }]
            }
        },

        cssmin: { //配置cssmin任务 压缩css代码
            pinetheme: { //配置 tbv3
                files: [{
                    expand: true,
                    cwd: '<%= paths.pinetheme.css %>/', //指定文件路径
                    src: ['*.css'], //指定文件
                    dest: '<%= paths.pinetheme.css %>/', //指定处理后存储路径
                    ext: '-min.css' //指定处理后的文件后缀
                }]
            }
        },
        uglify: { //配置uglify任务 grunt压缩js代码官方插件
            tbv3: {
                files: [{
                    expand: true,
                    cwd: '<%= paths.tbv3 %>/jsbuild/tb/<%= moduleName.tbv3 %>/', //指定文件路径
                    src: ['*.js', 'optim/*.js'], //指定文件
                    dest: '<%= paths.tbv3 %>/jsmin/tb/<%= moduleName.tbv3 %>/<%= date %>/', //指定处理后存储路径
                    ext: '-min.js' //指定处理后的文件后缀
                }]
            }
        }
    });

    //读取插件
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    //-------------------------------------------------------------------------------------------------------
    //处理指定模块的 CSS
    grunt.registerTask('pt_css', function() {

        console.log('正在压缩 pinetheme 主题的 css');
        grunt.task.run('cssmin:pinetheme');

    });
    //------------------------------------------------------------------------------------------------- 
    //测试模块时间戳（长时间执行任务，时间戳是否变化）
    grunt.registerTask('time', function() {
        console.log('压缩时间：' + grunt.config.data.date);
        var done = this.async();
        setTimeout(function() {
            console.log('5 seconds!');
            console.log('压缩时间：' + grunt.config.data.date);
            done();
        }, 5000);
    });
    //测试输入
    grunt.registerTask('test', function(str) {
        console.log('输入：' + str + ',' + grunt.util.kindOf(str));
        if (str == undefined) {
            console.log('请输入需要压缩的模块名!');
        } else {
            console.log('输入模块名：' + str);
        }
    });

};