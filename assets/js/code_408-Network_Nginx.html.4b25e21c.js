"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[2534],{9874:(s,i)=>{i.A=(s,i)=>{const a=s.__vccOpts||s;for(const[s,n]of i)a[s]=n;return a}},8282:(s,i,a)=>{a.r(i),a.d(i,{comp:()=>t,data:()=>h});var n=a(2360);const e=[(0,n.Fv)('<h1 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx"><span>Nginx</span></a></h1><blockquote><p><a href="https://www.kuangstudy.com/bbs/1377454518035292162" target="_blank" rel="noopener noreferrer">狂神Nginx学习笔记</a></p><p>Nginx 三大作用：1）动静分离 2）反向代理 3）负载均衡</p><p>特点：一旦启动永远不需要重启，但是我们需要重新加载配置文件 <code>nginx -s reload</code></p></blockquote><p>常用配置：Nginx 代理后会丢失很多东西，比如 host.. 也可以使用 nginx 设置每一个请求的唯一 id</p><p><strong>nginx server_name 多个的话，空格隔开就行</strong> 恰好nginx -t检查不会报错。 跟其它配置混一起，感觉有时生效，有时不生效，排查了好久。现在看来是nginx把 “a.example.com,”当成匹配规则了。</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">#主配置文件</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">http</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">{</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    #添加其他配置，注意分号不要丢</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">   \t include</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /etc/nginx/conf.d/</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">*</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">.conf</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    }</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    </span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    </span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">#其它配置</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">server</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> {</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">    listen</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">       80</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">    server_name</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">  1024zzq.com</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">    location</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> {</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">        proxy_pass</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">   http://101.34.55.204:8080</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">        index</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">  index.html</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> index.htm</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">        proxy_set_header</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> Host</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> $host</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">        proxy_set_header</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> X-Real-Ip</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> $remote_addr</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">        proxy_set_header</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> X-Forwarded-For</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> $remote_addr</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">\t\t#proxy_set_header X-Request-Id $request_id;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    }</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">#    access_log /logs/1024.zzq.com.access.log;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="一、反向代理" tabindex="-1"><a class="header-anchor" href="#一、反向代理"><span>一、反向代理</span></a></h2><h3 id="正向代理-vs-反向代理-的概念" tabindex="-1"><a class="header-anchor" href="#正向代理-vs-反向代理-的概念"><span>正向代理 vs 反向代理 的概念</span></a></h3><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    正向代理：例如翻墙软件，客户端请求到香港的一台服务器，由这台服务器再请求到美国等其它被墙地区的服务器。</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    代理客户端的</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">        客户端 </span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> 代理服务器 </span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> 目标服务器</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">        </span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">        </span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    反向代理：例如百度的服务器肯定不止一台，你会先访问到代理服务器再给你决定具体让你到哪一台服务器拿数据</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    代理服务器端的</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    </span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    反向代理（</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">Reverse</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> Proxy）方式是指以代理服务器来接受internet上的连接请求，然后将请求转发给内部网络上的服务器，并将从服务器上得到的结果返回给internet上请求连接的客户端，此时代理服务器对外就表现为一个服务器。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>正向代理：（翻墙）</p><figure><img src="https://kuangstudy.oss-cn-beijing.aliyuncs.com/bbs/2021/01/25/kuangstudy46bdad36-d3e0-43b0-a223-43360b7e8fc7.png" alt="正向代理" tabindex="0" loading="lazy"><figcaption>正向代理</figcaption></figure><p>反向代理：（百度）</p><figure><img src="https://kuangstudy.oss-cn-beijing.aliyuncs.com/bbs/2021/01/25/kuangstudy62a15097-6e2a-4dbe-bcf5-f0d7cab81089.png" alt="反向代理" tabindex="0" loading="lazy"><figcaption>反向代理</figcaption></figure><h2 id="二、负载均衡" tabindex="-1"><a class="header-anchor" href="#二、负载均衡"><span>二、负载均衡</span></a></h2><blockquote><p>session问题：SpringCache+Redis 保存Cookie解决</p></blockquote><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">upstream lb{</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    server </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">127.0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#B31D28;--shiki-dark:#FFFFFF;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#B31D28;--shiki-dark:#FFFFFF;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">8080</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> weight</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    server </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">127.0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#B31D28;--shiki-dark:#FFFFFF;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#B31D28;--shiki-dark:#FFFFFF;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">8081</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> weight</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">}</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">location </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> {</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    proxy_pass http</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">//lb;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、动静分离" tabindex="-1"><a class="header-anchor" href="#三、动静分离"><span>三、动静分离</span></a></h2><blockquote><p>有错误不要蒙头瞎搞，瞎百度。先凝练自己的问题。 第一步是查 log 我就是靠这个分析出了错误！</p><p>问题：假如项目没用Thymeleaf 用的vue 是不是就不需要nginx处理动静分离了</p></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>upstream gulimall { </span></span>\n<span class="line"><span>\tserver 127.0.0.1:88;</span></span>\n<span class="line"><span>}</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>include conf.d/*.conf;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>server {</span></span>\n<span class="line"><span>    listen       80;</span></span>\n<span class="line"><span>    server_name  *.gulimall.com;</span></span>\n<span class="line"><span>    location /static {</span></span>\n<span class="line"><span>        root html;</span></span>\n<span class="line"><span>    }</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>    location / { </span></span>\n<span class="line"><span>      proxy_set_header Host $host; </span></span>\n<span class="line"><span>      proxy_pass http://gulimall;  </span></span>\n<span class="line"><span>    }</span></span>\n<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、其它用途" tabindex="-1"><a class="header-anchor" href="#四、其它用途"><span>四、其它用途</span></a></h2><p>access.log</p><p>看过一篇订阅号，可以通过这个访问日志拿到所有访问者的ip地址 然后写脚本进行限制恶意访问</p><h2 id="五、配置详解" tabindex="-1"><a class="header-anchor" href="#五、配置详解"><span>五、配置详解</span></a></h2><h3 id="_5-1-root-alias" tabindex="-1"><a class="header-anchor" href="#_5-1-root-alias"><span>5.1.root &amp; alias</span></a></h3><blockquote><p>场景：想搭建本地静态资源Web服务器</p><p>在Nginx中，<code>root</code> 和 <code>alias</code> 都是用于定义服务器上的文件路径的指令，但它们之间存在一些区别。</p></blockquote><p><code>root</code> 指令用于定义一个目录作为请求的根目录。当一个请求到达时，Nginx将在指定的根目录下查找相应的文件。以下是一个示例：</p><div class="language-nginx line-numbers-mode" data-highlighter="shiki" data-ext="nginx" data-title="nginx" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">server</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    listen </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">80</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    server_name </span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">example.com;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    root </span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">/var/www/html;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的配置中，当用户访问 <code>example.com</code> 时，Nginx将在 <code>/var/www/html</code> 目录下查找相应的文件并返回给用户。如果用户请求的URI是 <code>/index.html</code>，Nginx将尝试找到并返回 <code>/var/www/html/index.html</code> 文件。</p><p><code>alias</code> 指令用于指定一个别名路径，它用于将请求映射到文件系统中的不同位置，而不是直接将请求与根目录进行拼接。以下是一个示例：</p><div class="language-nginx line-numbers-mode" data-highlighter="shiki" data-ext="nginx" data-title="nginx" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">server</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    listen </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">80</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    server_name </span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">example.com;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    location</span><span style="--shiki-light:#6F42C1;--shiki-dark:#ABB2BF;"> /static/ </span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">{</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        alias </span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">/var/www/static/;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    }</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的配置中，当用户访问 <code>example.com/static/file.txt</code> 时，Nginx将在 <code>/var/www/static/</code> 目录下查找相应的文件并返回给用户。与 <code>root</code> 不同的是，<code>alias</code> 可以指定一个不同于URI的文件系统路径。（<mark>记得alias最后要带上 /</mark>）</p><p>总结一下：</p><ul><li><code>root</code> 指令指定的路径是与URI拼接的，适用于将请求直接映射到文件系统路径。</li><li><code>alias</code> 指令指定了一个别名路径，用于将请求映射到文件系统中的不同位置。</li></ul><p>实践：特喵的感觉一样的效果</p><div class="language-nginx line-numbers-mode" data-highlighter="shiki" data-ext="nginx" data-title="nginx" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">location</span><span style="--shiki-light:#6F42C1;--shiki-dark:#ABB2BF;"> / </span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">{</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">            #root   html;</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">            #root /Users/xd/Documents/GitRepo/StudyNotes;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">            alias </span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">/Users/xd/Documents/GitRepo/StudyNotes/;    </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">#不加 / 会访问不到</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">            index </span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> index.html index.htm;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>https://www.cnblogs.com/qingshan-tang/p/12763522.html</p><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">五.重点</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">　　重点是理解alias与root的区别，root与alias主要区别在于nginx如何解释location后面的uri，这使两者分别以不同的方式将请求映射到服务器文件上。</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">　　alias（别名）是一个目录别名。</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">　　　　例子：</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">　　　　　　location /</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">123</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">/abc/ {</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FFFFFF;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">　　　　　　　　root</span><span style="--shiki-light:#B31D28;--shiki-dark:#FFFFFF;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;"> /ABC;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">　　　　　　}</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">　　　　　　当请求http:</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">//qingshan.com/123/abc/logo.png时，会返回 /ABC/123/abc/logo.png文件，即用/ABC 加上 /123/abc。</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> </span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> </span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">　　root（根目录）是最上层目录的定义。</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">例子：</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">　　　　　　location /</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">123</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">/abc/ {</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FFFFFF;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">　　　　　　　　alias</span><span style="--shiki-light:#B31D28;--shiki-dark:#FFFFFF;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;"> /ABC;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">　　　　　　}</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">　　　　　　当请求http:</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">//qingshan.com/123/abc/logo.png时，会返回 /ABC/logo.png文件，即用/ABC替换 /123/abc。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',37)],l={},t=(0,a(9874).A)(l,[["render",function(s,i){return(0,n.uX)(),(0,n.CE)("div",null,e)}]]),h=JSON.parse('{"path":"/code/408-Network/Nginx.html","title":"Nginx","lang":"zh-CN","frontmatter":{"description":"Nginx 狂神Nginx学习笔记 Nginx 三大作用：1）动静分离 2）反向代理 3）负载均衡 特点：一旦启动永远不需要重启，但是我们需要重新加载配置文件 nginx -s reload 常用配置：Nginx 代理后会丢失很多东西，比如 host.. 也可以使用 nginx 设置每一个请求的唯一 id nginx server_name 多个的话，...","head":[["meta",{"property":"og:url","content":"https://doc.zzq8.cn/code/408-Network/Nginx.html"}],["meta",{"property":"og:site_name","content":"Piglet"}],["meta",{"property":"og:title","content":"Nginx"}],["meta",{"property":"og:description","content":"Nginx 狂神Nginx学习笔记 Nginx 三大作用：1）动静分离 2）反向代理 3）负载均衡 特点：一旦启动永远不需要重启，但是我们需要重新加载配置文件 nginx -s reload 常用配置：Nginx 代理后会丢失很多东西，比如 host.. 也可以使用 nginx 设置每一个请求的唯一 id nginx server_name 多个的话，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://kuangstudy.oss-cn-beijing.aliyuncs.com/bbs/2021/01/25/kuangstudy46bdad36-d3e0-43b0-a223-43360b7e8fc7.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-05T16:30:15.000Z"}],["meta",{"property":"article:author","content":"Piglet"}],["meta",{"property":"article:modified_time","content":"2024-06-05T16:30:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Nginx\\",\\"image\\":[\\"https://kuangstudy.oss-cn-beijing.aliyuncs.com/bbs/2021/01/25/kuangstudy46bdad36-d3e0-43b0-a223-43360b7e8fc7.png\\",\\"https://kuangstudy.oss-cn-beijing.aliyuncs.com/bbs/2021/01/25/kuangstudy62a15097-6e2a-4dbe-bcf5-f0d7cab81089.png\\"],\\"dateModified\\":\\"2024-06-05T16:30:15.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Piglet\\",\\"url\\":\\"https://newzone.top\\"}]}"]]},"headers":[{"level":2,"title":"一、反向代理","slug":"一、反向代理","link":"#一、反向代理","children":[{"level":3,"title":"正向代理 vs 反向代理 的概念","slug":"正向代理-vs-反向代理-的概念","link":"#正向代理-vs-反向代理-的概念","children":[]}]},{"level":2,"title":"二、负载均衡","slug":"二、负载均衡","link":"#二、负载均衡","children":[]},{"level":2,"title":"三、动静分离","slug":"三、动静分离","link":"#三、动静分离","children":[]},{"level":2,"title":"四、其它用途","slug":"四、其它用途","link":"#四、其它用途","children":[]},{"level":2,"title":"五、配置详解","slug":"五、配置详解","link":"#五、配置详解","children":[{"level":3,"title":"5.1.root & alias","slug":"_5-1-root-alias","link":"#_5-1-root-alias","children":[]}]}],"git":{"createdTime":1712997543000,"updatedTime":1717605015000,"contributors":[{"name":"MiniPC","email":"1024zzq@gmail.com","commits":1}]},"readingTime":{"minutes":3.96,"words":1187},"filePathRelative":"code/408-Network/Nginx.md","localizedDate":"2024年4月13日","excerpt":"\\n<blockquote>\\n<p><a href=\\"https://www.kuangstudy.com/bbs/1377454518035292162\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">狂神Nginx学习笔记</a></p>\\n<p>Nginx 三大作用：1）动静分离  2）反向代理  3）负载均衡</p>\\n<p>特点：一旦启动永远不需要重启，但是我们需要重新加载配置文件 <code>nginx -s reload</code></p>\\n</blockquote>\\n<p>常用配置：Nginx 代理后会丢失很多东西，比如 host.. 也可以使用 nginx 设置每一个请求的唯一 id</p>","autoDesc":true}')}}]);