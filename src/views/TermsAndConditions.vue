<template>
  <div class="termsAndConditions">
    <img
      class="termsAndConditions__title"
      src="@/assets/web/titles/Titulo_TyC.png"
    />
    <div class="termsAndConditions__content-1">
      <div class="termsAndConditions__content">
        <div class="termsAndConditions__box">
          <div class="termsAndConditions__scroll">
            <span class="termsAndConditions__text">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TermsAndConditions'
}
</script>

<style lang="scss">
@import "@/assets/scss/mixins.scss";

.termsAndConditions {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  height: 100%;
  &__title {
    height: 90px;
    @include mobile() {
      height: 50px;
    }
  }
  &__content-1 {
    flex: 1;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  &__content {
    background: rgba(251,199, 2, 0.7);
    box-shadow: 7px 7px 7px #00000059;
    border-radius: 25px;
    width: 600px;
    margin: 20px;
    position: relative;
    @include mobile() {
      width: 88%;
    }
  }
  &__box {
    position: absolute;
    top: 20px;
    left: 30px;
    right: 30px;
    bottom: 20px;
    @include mobile () {
      top: 10px;
      left: 15px;
      right: 15px;
      bottom: 10px;
    }
  }
  &__scroll {
    overflow-y: auto;
    width: 100%;
    max-height: 100%;
    height: 100%;
    padding-right: 30px;
    text-align: center;
    @include mobile () {
      padding-right: 15px;
    }

  }
  &__text{
    font-family: MontrealBold;
    font-size: 14px;
    @include mobile() {
      font-size: 10px;
    }
  }
}

/* width */
::-webkit-scrollbar {
  width: 8px !important;
}

/* Track */
::-webkit-scrollbar-track {
  background-color: rgba(214, 38, 38, 0.7) !important;
  border-radius: 10px !important;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: white !important;
  border-radius: 10px !important;
}

</style>
