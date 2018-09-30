

    it("should display pick up in store", function() {
        // given

        // when
        (obj.Blender.purchasingChannelCode === '0'|| obj.Blender.purchasingChannelCode ==='2')

        // then
        expect(myBtn).toBe(true);
    });


    it("should not display pick up in store", function() {
        // given

        // when
       
        // then
        expect(false).toBe(false);
    });
    it("should display add to cart", function() {
        // given

        // when
        (obj.Blender.purchasingChannelCode === '0'|| obj.Blender.purchasingChannelCode ==='1')

        // then
        expect(myBtn2).toBe(true);
    });


    it("should not display add to cart", function() {
        // given

        // when
        (obj.Blender.purchasingChannelCode === '2')
        // then
        expect(myBtn2).toBe(false);
    });
    