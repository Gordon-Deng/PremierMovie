
 var infor = {"content":[{"name":"name","value":"大闹天竺"},{"name":"导演","value":"王宝强,"},{"name":"编剧","value":"束焕,丁丁,"},{"name":"主演","value":"王宝强,白客,岳云鹏,柳岩,黄渤,林永健,马浴柯,陈佩斯,朱时茂,王祖蓝,刘昊然,"},{"name":"类型","value":"喜剧,动作,冒险,"},{"name":"上映日期","value":"2017-01-28(中国大陆),"},{"name":"summary","value":"盛唐集团总裁唐宗突然离世并留下遗训,让他的儿子唐森（白客 饰）在穷小子武空（王宝强 饰）的陪同下前往印度寻找遗嘱。在印度巧遇自恋臭美却又忠诚的朱天鹏（岳云鹏 饰）,以及美丽性感却深藏秘密的美女吴静（柳岩 饰）,四人兜兜转转竟结为同盟,而最令四人不解的是为何这次取遗嘱之旅凶险重重,危机四伏,并且遗嘱之所以放在印度，更是隐藏着秘密。"},{"name":"评分","value":3.9},{"name":"image","value":"https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2408307430.jpg"},{"name":"id","value":"26389696"}]}
 
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
                data: [21957,19882,21587,20552,22377,25296,28781,42459,356518,350888,265301,218733,185347,162124,151384,126009,112232,89594,78459,79992,64737,58437,48258,41609,34652,33396,31862,30473,29709,31627,35949,27536,24267,21734,20079,20281,22854,21473,15590,15131,16293,15936,16880,20437,21188]
            }, ]
        };

        var word_list = [{"text":"尴尬","weight":0.9891693939037746},{"text":"特效","weight":1.0793828982422817},{"text":"低俗","weight":0.20965304523604159},{"text":"不错","weight":0.6809463723959318},{"text":"诙谐","weight":0.2896528329419334},{"text":"幼稚","weight":0.3640281102600638},{"text":"无聊","weight":0.04948359789977019},{"text":"有趣","weight":0.06487789083842378},{"text":"轻松","weight":0.20464852994840854},{"text":"热闹","weight":0.3760974665376938},{"text":"不彩","weight":0.45030641723006776},{"text":"拖沓","weight":0.06944331433718533},{"text":"恶俗","weight":0.16840044244599947},{"text":"最烂","weight":0.5407834825446179},{"text":"一大","weight":0.5807790767903035},{"text":"奇观","weight":0.09704518362876335},{"text":"苛刻","weight":0.4816873825967734},{"text":"最惨","weight":0.4497446746648948},{"text":"很好","weight":0.39383090802602666},{"text":"惭愧","weight":0.10202789274402622},{"text":"粗糙","weight":0.24529799162832197},{"text":"充满","weight":0.39187680839891925},{"text":"荒诞","weight":0.5910754526789666},{"text":"卖蠢","weight":0.39744815648674536},{"text":"可悲","weight":0.0001374144153626601},{"text":"冗余","weight":0.5001956667662651},{"text":"生硬","weight":0.27190823801928105},{"text":"粗俗","weight":0.4848572809792805},{"text":"幽默","weight":0.38584196960005757},{"text":"肤浅","weight":0.15156320921041072},{"text":"强硬","weight":0.23306031756159343},{"text":"完整","weight":0.20534422440511188},{"text":"意外","weight":0.031165875791888936},{"text":"糟糕","weight":0.20782462327096257},{"text":"难懂","weight":0.07473334641802953},{"text":"电影","weight":0.4105090780658266},{"text":"六小龄童","weight":0.43708854475995923},{"text":"故事","weight":0.4119765326087182},{"text":"剧情","weight":0.33389962413438007},{"text":"演员","weight":0.2048578887120001},{"text":"笑点","weight":0.2006074544620796},{"text":"喜剧","weight":0.1315967159243101},{"text":"西游记","weight":0.23321058285998902},{"text":"观众","weight":0.17257250080288894},{"text":"烂片","weight":0.024914442755920443},{"text":"白客","weight":0.10245903885057896},{"text":"功夫","weight":0.025515715748315394},{"text":"结尾","weight":0.009029349724293145},{"text":"影片","weight":0.004072002952181389},{"text":"智商","weight":0.024623629647104173},{"text":"歌舞","weight":0.07961466342570794},{"text":"色彩","weight":0.042245355771473474},{"text":"剪辑","weight":0.031493191911406156},{"text":"演技","weight":0.07769198793307792},{"text":"角色","weight":0.10194371975426748},{"text":"电影院","weight":0.12504429778709558},{"text":"证明","weight":0.14352445090728752},{"text":"情怀","weight":0.06264819381330923},{"text":"造型","weight":0.04091538430816903},{"text":"情节","weight":0.03389926577376153},{"text":"全程","weight":0.01842080183833638},{"text":"时间","weight":0.032367729463731044},{"text":"彩蛋","weight":0.09460711242414534},{"text":"动作","weight":0.08294988105038288},{"text":"公路","weight":0.04046262527942566},{"text":"套路","weight":0.0739348938301997},{"text":"水平","weight":0.1114452783888805},{"text":"恶心","weight":0.0033354112668142243},{"text":"感情","weight":0.08104356918415438},{"text":"贺岁片","weight":0.013382892365667464},{"text":"","weight":null}];


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
        