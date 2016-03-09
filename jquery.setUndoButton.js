(function($) {

  $.fn.extend({

    setUndoButton: function(options) {

      this.defaultOptions = {
        time: 5,
        text: "undo",
        countdown: true,
        onUndo: function() {},
        onClick: function() {},
        onTimeout: function() {}
      };

      var settings = $.extend({}, this.defaultOptions, options);

      function update(target) {

        this.target = $(target);

        this.onClick = function(callback) {
          this.target.off("click.undo").on("click.undo", callback);
          return this;
        }

        this.execute = function(callback) {

          clearInterval(this.target.data("interval"));

          if (callback instanceof Function)
            callback.apply(callback, this.target);

          return this;

        }

        this.resetData = function() {
          this.target.html(this.target.data("originalText")).data("time", settings.time);
          return this;
        }

        this.setData = function(data) {
          this.target.data(data);
          return this;
        }

        this.setText = function() {
          this.target.html(settings.text + (settings.countdown ? " (" + this.target.data("time") + "s)" : ""));
          return this;
        }

        this.setInterval = function() {

          var interval = setInterval(function(target) {
            new update(target).checkTimeout();
          }, 1000, this.target);

          this.target.data("interval", interval);

        }

        this.checkTimeout = function() {

          this.setData({
            "time": parseInt(this.target.data("time")) - 1
          }).setText();

          if (this.target.data("time") <= 0) {
            this.execute(settings.onTimeout);
          }

        }

      }

      function showUndoButton(e) {
        e.preventDefault();
        new update(this).onClick(removeUndoButton).execute(settings.onClick).resetData().setText().setInterval();
      }

      function removeUndoButton(e) {
        e.preventDefault();
        new update(this).onClick(showUndoButton).execute(settings.onUndo).resetData();
      }

      return this.each(function() {
        new update(this).onClick(showUndoButton).setData({
          "originalText": this.innerHTML
        });
      })

    }

  });

})(jQuery);
