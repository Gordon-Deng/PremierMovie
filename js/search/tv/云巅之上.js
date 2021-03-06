
 var infor = {"content":[{"name":"name","value":"云巅之上"},{"name":"导演","value":"陈家霖"},{"name":"主演","value":"陈晓 袁姗姗 张哲瀚 米热 "},{"name":"类型","value":"剧情 爱情"},{"name":"制片国家/地区","value":"中国大陆"},{"name":"上映日期","value":"2017"},{"name":"summary","value":"简兮（袁姗姗 饰）自小和祖母过着相依为命的生活，在祖母无微不至的呵护下，简兮成长为了一个坚强而又乐观的善良女子。长大后的简兮决定去寻找自己的亲生母亲，哪知道不仅被生母拒之门外，还惨遭冷嘲热讽。然而，这并没有令简兮感到绝望，对表演充满了热情的她选择走上了演艺的道路。\n凭借着过人的天赋和不懈的努力，简兮的表演终于获得了观众的认可，攀登上事业高峰的她名利双收，还认识了名为唐斐（陈晓 饰）的男子。唐斐浸淫演艺圈多年，早已经对其中的尔虞我诈心灰意冷，简兮的出现让他对人性逐渐恢复了希望，两人由最初的相互看不顺眼转变为了惺惺相惜。"},{"name":"评分","value":6.3},{"name":"image","value":"https://img5.doubanio.com/view/movie_poster_cover/lpst/public/p2274446346.jpg"},{"name":"id","value":"26344892"}]}
 
        var bar_stack_option = {
            title: {
                x: 'left'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data: ['热度变化', '百度指数', '评论数']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                data: ['2017-01-20','2017-01-21','2017-01-22','2017-01-23','2017-01-24','2017-01-25','2017-01-26','2017-01-27','2017-01-28','2017-01-29','2017-01-30','2017-01-31','2017-02-01','2017-02-02','2017-02-03','2017-02-04','2017-02-05','2017-02-06','2017-02-07','2017-02-08','2017-02-09','2017-02-10','2017-02-11','2017-02-12','2017-02-13','2017-02-14','2017-02-15','2017-02-16','2017-02-17','2017-02-18','2017-02-19','2017-02-20','2017-02-21','2017-02-22','2017-02-23','2017-02-24','2017-02-25','2017-02-26','2017-02-27','2017-02-28','2017-03-01','2017-03-02','2017-03-03','2017-03-04','2017-03-05']
            }],
            yAxis: [{
                name: '热度',
                type: 'value',
            }, {
                name: '评论数',
                type: 'value',
            }, {
                name: '百度指数',
                type: 'value',
                offset: 65
            }],
            series: [{
                name: '热度变化',
                type: 'line',
                data: []
            }, {
                name: '评论数',
                type: 'line',
                yAxisIndex: 1,
                data: []
            }, {
                name: '百度指数',
                type: 'line',
                yAxisIndex: 2,
                data: [1103,990,944,1008,1074,1064,983,775,932,977,1043,1175,1187,1186,1216,1194,1210,1233,1207,1169,1098,1140,1056,1031,918,904,863,1500,9812,6898,6064,5231,6389,10875,52911,149507,170613,147709,95897,89712,85770,90081,116851,143549,139986]
            }, ]
        };

        var word_list = [{"text":"尴尬","weight":0.14391057410023858},{"text":"不错","weight":0.4735783229126653},{"text":"漂亮","weight":0.19950109808814256},{"text":"成功","weight":0.28199987105948804},{"text":"很棒","weight":0.6035230753550446},{"text":"强大","weight":0.5627582315416676},{"text":"简单","weight":0.5346015586401716},{"text":"幼稚","weight":0.03269108144032012},{"text":"聒噪","weight":0.05959219724383778},{"text":"好烦","weight":0.38247040412492916},{"text":"温柔","weight":0.2414403270883576},{"text":"惊喜","weight":0.2210262455134479},{"text":"拖沓","weight":0.1948679873989999},{"text":"不熟","weight":0.03368669038664728},{"text":"悲凉","weight":0.2242665735817901},{"text":"凄惨","weight":0.28114480176883555},{"text":"轻松","weight":0.34338587181110874},{"text":"愉悦","weight":0.3924681579636939},{"text":"倔强","weight":0.4326384495323087},{"text":"辛苦","weight":0.262122116190497},{"text":"干净","weight":0.28412724023204644},{"text":"清纯","weight":0.06860902664733112},{"text":"剧挺","weight":0.21063347296626264},{"text":"艰险","weight":0.07902411676696218},{"text":"嘴硬","weight":0.028768208941651278},{"text":"心软","weight":0.3295771700141348},{"text":"不懈","weight":0.07053686845896937},{"text":"无聊","weight":0.26016316799607714},{"text":"意外","weight":0.2040037843142518},{"text":"很烂","weight":0.21371450271774095},{"text":"冲微","weight":0.1726156113042917},{"text":"不冷","weight":0.3140957826386889},{"text":"可贵","weight":0.2518162390722394},{"text":"低劣","weight":0.18267329698288992},{"text":"宽容","weight":0.2638217212588034},{"text":"娱乐圈","weight":0.2462580989800822},{"text":"剧情","weight":0.08438486496270119},{"text":"演技","weight":0.5652219824604922},{"text":"女主","weight":0.09686596675464261},{"text":"演员","weight":0.34325213754405975},{"text":"励志","weight":0.016030475585903745},{"text":"狗血","weight":0.3506842602658672},{"text":"角色","weight":0.20508100630745346},{"text":"戏中戏","weight":0.2347972903068618},{"text":"剧中","weight":0.19539284899014414},{"text":"题材","weight":0.24710735519680593},{"text":"故事","weight":0.20240533441416808},{"text":"台词","weight":0.11793694632371432},{"text":"颜值","weight":0.19381960086542538},{"text":"梦想","weight":0.14531686838473343},{"text":"套路","weight":0.20302342913114296},{"text":"电视剧","weight":0.10227666971428319},{"text":"造型","weight":0.17808695619159012},{"text":"配音","weight":0.13008268425638456},{"text":"现实","weight":0.14559836091152814},{"text":"男主","weight":0.048236804642922355},{"text":"剧本","weight":0.15714930584158138},{"text":"主角","weight":0.05568590333644502},{"text":"剧里","weight":0.04906307083319683},{"text":"情节","weight":0.014972197609425936},{"text":"演戏","weight":0.035610120695831284},{"text":"观众","weight":0.13965282854949362},{"text":"人物","weight":0.046017157437167895},{"text":"戏份","weight":0.008008186959694623},{"text":"国产","weight":0.10450997650677987},{"text":"背景","weight":0.001119984434703315},{"text":"性格","weight":0.07401562244492838},{"text":"老师","weight":0.13514514361609054},{"text":"偶像剧","weight":0.001960956565689864},{"text":"毒舌","weight":0.003677475556612804},{"text":"","weight":null}];


        ///////////////////////////////////////////////////////////////////////

        $('.product-details').html('<h5>简介：</h5><p class="intro"></p>');
        for (var i = 0; i < infor.content.length; ++i) {
            if (infor.content[i].name === 'summary') {
                $('.intro').html(infor.content[i].value);
            } else if (infor.content[i].name === 'id') {
                continue;
            } else if (infor.content[i].name === 'image') {
                $('.product-image-large img').attr('src', infor.content[i].value);
            } else if (infor.content[i].name === 'name') {
                $('.section-breadcrumbs h1').html(infor.content[i].value);
                $('title').html('冠影 · PREMIER MOVIE - ' + infor.content[i].value);
            } else {
                if(infor.content[i].value != null)
                $('#tab2 table').append('<tr><td>' + infor.content[i].name + '</td><td>' + infor.content[i].value + '</td></tr>')
            }
        }


        var tab1 = document.getElementById('tab1');
        var bar_dom = document.getElementById('bar_dom');

        echarts.init(bar_dom).setOption(bar_stack_option, true);
        $('#key_dom').jQCloud(word_list);

        function randomData() {
            return Math.round(Math.random() * 1000);
        }
        