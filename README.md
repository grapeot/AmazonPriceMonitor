# Amazon price crawler and monitor

If you're selling (or buying) something at amazon, it'll be useful to know the historical price trends.

This is also a good startpoint for web crawling and js visualization. I think the front-end library management (with `npm`) in this repo is interesting too.

# Deployment

```
    # dependencies
    sudo apt-get install phantomjs  # necessary for data crawling and analysis
    npm install

    # deploy the crawler
    # example crontab configuration:
    # 0 * * * * /path/to/repo/amazon.sh 
    crontab -e

    # launch!
    coffee app
```

An example `price.txt` is provided for quick visualizaiton preview. You may want to remove it before crawling your own data.
